<template>
    <div>
        <textarea :class="id" :value="value"></textarea>
    </div>
</template>
<script>
    // Import TinyMCE
    import './lightgray/skin.min.css';
    import './lightgray/content.min.css';
    import tinymce from 'tinymce/tinymce';
    import './zh_CN'
    import 'tinymce/themes/modern/theme';
    import 'tinymce/plugins/paste';
    import 'tinymce/plugins/link';
    import 'tinymce/plugins/image';
    const INIT = 0;
    const INPUT = 1;
    const CHANGED = 2;
    let EDITOR = null;
    export default {
        name: 'edidor',
        props: {
            value: {
                required: true
            },
            setting: {}
        },
        watch: {
            value: function (val) {
                console.log('init ' + val);
                if( val == null ) {
                    tinymce.get(this.realId).setContent('');
                }
                // if (this.status == INIT || tinymce.activeEditor.getContent() != val) {
                //     tinymce.activeEditor.setContent(val);
                // }
                // this.status = CHANGED;
            }
        },
        data() {
            return {
                status: INIT,
                id: 'editor-'+new Date().getMilliseconds()+Math.floor(Math.random()*1000000),
                realId: null,
                uploadApi: this.$imgUploadApi
            };
        },
        methods: {
        },
        created:function () {

        },
        mounted: function () {
            const _this = this;
            // console.log('this1111111111111111111111111',this);
            const setting =
            {
                selector: '.'+_this.id,
                language: "zh_CN",
                init_instance_callback: (editor)=> {
                    // console.log('calback this2222222222222222:',_this);
                    EDITOR = editor;
                    console.log("Editor: " + editor.id + " is now initialized.");
                    _this.realId = editor.id;
                    // if(  _this.value )  {
                    //     tinymce.get(_this.realId).setContent( _this.value );
                    // }
                    // console.log( '测试四c', _this.realId );
                    // _this.$emit('input', _this.value);
                    editor.on('input change undo redo', () => {
                        let content = editor.getContent();
                        _this.$emit('input', content);
                    });
                },
                // 参考地址：https://blog.csdn.net/smoisy/article/details/81268772
                plugins: ['image'],
                images_upload_handler: function (blobInfo, success, failure) {
                    var xhr, formData;
                    xhr = new XMLHttpRequest();
                    xhr.withCredentials = false;
                    xhr.open("POST", _this.uploadApi+'?isUrl=true');
                    formData = new FormData();
                    formData.append("file", blobInfo.blob());
                    xhr.onload = function(e){
                        var json;

                        if (xhr.status != 200) {
                            failure('HTTP Error: ' + xhr.status);
                            return;
                        }
                        json = JSON.parse(this.responseText);
                        if (!json || typeof json.data != 'string') {
                            failure('Invalid JSON: ' + xhr.responseText);
                            return;
                        }
                        // tinyMCE.execCommand('mceReplaceContent',false,'<img src="https://image.le-99.xyz/images/56831537893019703.png" />')
                        success(json.data);
                    };
                    xhr.send(formData);
                }
            }
            Object.assign(setting, _this.setting);
            // console.log('setting',setting);
            tinymce.init(setting);
            // console.log('测试测试', tinymce.get());
            // console.log('测试测试222', this.realId);
            // window.this = this;
        },
        beforeDestroy: function () {
            EDITOR.destroy();
            // tinymce.get(this.realId).destroy();
            // tinymce.remove(this.realId);
        }
    };

</script>
