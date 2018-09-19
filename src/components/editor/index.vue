<template>
    <div>
        <textarea :class="id" v-model="value"></textarea>
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
    const INIT = 0;
    const INPUT = 1;
    const CHANGED = 2;
    let EDITOR = null;
    export default {
        props: {
            value: {
                required: true
            },
            setting: {}
        },
        watch: {
            value: function (val) {
                console.log('init ' + val);
                // if (this.status == INIT || tinymce.activeEditor.getContent() != val) {
                //     tinymce.activeEditor.setContent(val);
                // }
                // this.status = CHANGED;
            }
        },
        data: function () {
            return {
                status: INIT,
                id: 'editor-'+new Date().getMilliseconds(),
                realId: null
            };
        },
        methods: {
        },
        created:function () {

        },
        mounted: function () {
            const _this = this;
            console.log( '原来的', _this.value );
            const setting =
                {
                    selector: '.'+_this.id,
                    language: "zh_CN",
                    init_instance_callback: function(editor) {
                        EDITOR = editor;
                        console.log("Editor: " + editor.id + " is now initialized.");
                        _this.realId = editor.id;
                        // console.log( '你好巴拉巴拉', editor.id, _this.value,_this );
                        // if(  _this.value )  {
                        //     tinymce.get(_this.realId).setContent( _this.value );
                        // }
                        // console.log( '测试四c', _this.realId );
                        _this.$emit('input', _this.value);
                        editor.on('input change undo redo', () => {
                            let content = editor.getContent();
                            _this.$emit('input', content);
                        });
                    },
                    plugins: []
                };
            Object.assign(setting, _this.setting);
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
