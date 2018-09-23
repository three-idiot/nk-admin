<template>
<div class="app-container">
    <p class="title">
        代理商列表
        <el-button  type="danger" class="add-agent-button" @click="jumpAdd" v-permission="['agent-list-add']">新增代理商+</el-button>
    </p>
    <hr/>

    <div style="padding:30px;background:#F2F6FC;">
        <el-form :inline="true" :model="form" class="demo-form-inline">

            <el-form-item label="地区：">
                <el-select v-model="form.province" placeholder="请选择省" clearable class="address">
                    <el-option :label="item.name" :value="item.id" v-for="item in province" :key="item.id" @click.native="getNextLevel('city', item.id)"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="">
                <el-select v-model="form.city" placeholder="请选择市" clearable>
                    <el-option :label="item.name" :value="item.id" v-for="item in city" :key="item.id" @click.native="getNextLevel('county', item.id)"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="">
                <el-select v-model="form.county" placeholder="请选择区县" clearable>
                    <el-option :label="item.name" :value="item.id" v-for="item in county" :key="item.id" @click.native="getNextLevel('street', item.id)"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="">
                <el-select v-model="form.street" placeholder="请选择街道" clearable>
                    <el-option :label="item.name" :value="item.id" :key="item.id" v-for="item in street"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="代理商角色：">
                <el-select v-model="form.roleId" placeholder="请选择街道" clearable>
                    <el-option :label="val" :value="key" :key="key"  v-for="(val, key) in roleId"></el-option>
                </el-select>
            </el-form-item>
            <div>

            </div>
            <el-form-item label="代理商状态：">
                <el-select v-model="form.status" placeholder="请选择" clearable>
                    <el-option :label="val.msg" :value="key" :key="key" v-for="(val, key) in status"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="有效期：">
                <!--<el-date-picker v-model="daterange" type="daterange" value-format="yyyy-MM-dd" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">-->
                <!--</el-date-picker>-->
                <el-date-picker
                    v-model="daterange"
                    type="datetimerange"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="联系人：">
                <el-input v-model="form.contactsName" placeholder="请输入联系人姓名"></el-input>
            </el-form-item>

            <el-form-item label="电话：">
                <el-input v-model="form.contactsPhone" placeholder="请输入联系人电话"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit" v-permission="['agent-list-search']">搜索</el-button>
            </el-form-item>



        </el-form>
    </div>
    <p>代理商总数共 <span class="red">{{total_count}}</span> 条 </p>
    <el-table :stripe="true" :data="list" v-loading="listLoading" element-loading-text="Loading" border fit highlight-current-row>
        <el-table-column align="center" label='代理商编号'>
            <template slot-scope="scope">
                {{scope.row.agentNo}}
            </template>
        </el-table-column>

        <el-table-column align="center" label="代理商角色">
            <template slot-scope="scope">
                {{newRoleId[scope.row.roleId]}}
            </template>
        </el-table-column>

        <el-table-column label="代理商名称" align="center">
            <template slot-scope="scope">
                <span>{{scope.row.agentName}}</span>
            </template>
        </el-table-column>
        <el-table-column label="地区" align="center">
            <template slot-scope="scope">
                {{ scope.row.province }}
            </template>
        </el-table-column>
        <el-table-column label="联系人" align="center">
            <template slot-scope="scope">
                {{ scope.row.contactsName }}
            </template>
        </el-table-column>

        <el-table-column label="电话" width="110" align="center">
            <template slot-scope="scope">
                {{scope.row.contactsPhone}}
            </template>
        </el-table-column>

        <el-table-column label="地址"  align="center">
            <template slot-scope="scope">
                {{ scope.row.province }}
            </template>
        </el-table-column>

        <el-table-column label="有效期"  align="center">
            <template slot-scope="scope">
                {{ scope.row.expireTime }}
            </template>
        </el-table-column>

        <el-table-column class-name="status-col" label="代理商状态" width="110" align="center">
            <template slot-scope="scope">
                <el-tag :type="status[scope.row.status].color">{{status[scope.row.status].msg}}</el-tag>
            </template>
        </el-table-column>

        <el-table-column label="操作" width="340" align="center">
            <template slot-scope="scope">
                <el-button  size="mini" type="success" @click="goDetail(scope.row.id)"  v-permission="['agent-list-detail']" plain>
                    查看详情
                </el-button>
                <el-button type="primary" size="mini" @click="goEdit(scope.row.id)" v-permission="['agent-list-edit']">
                    编辑
                </el-button>
                <el-button  size="mini" type="success" v-if="scope.row.status == 1" @click="opt(scope.row.id,2)">恢复</el-button>
                <el-button  size="mini" type="danger" v-if="scope.row.status != 1"  @click="opt(scope.row.id,1)">
                    停用
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination @current-change="currentPageChange" :background='true' :current-page="form.pageIndex" :page-size="form.pageSize" layout="total, prev, pager, next, jumper" :total="total_count">
        </el-pagination>
    </div>
</div>
</template>

<script>
import {
    getAgentList,
    opt,
    getLowerAreas,
    agentRoleList
} from "@/api/agent";
import agentMap from "@/map/agent";
export default {
    data() {
        return Object.assign({}, agentMap, {
            newRoleId: {},
            province: null,
            city: null,
            county: null,
            street: null,
            list: null,
            listLoading: true,
            max_page: 0,
            daterange: [],
            total_count: 0,
            priceCount: null,
            form: {
                province: null,
                city: null,
                county: null,
                street: null,
                roleId: null,
                status: null,
                beginExpireTime: null,
                endExpireTime: null,
                contactsName: null,
                contactsPhone: null,
                pageIndex: 1,
                pageSize: 20
            },
        });
    },
    computed: {
        listQuery() {
            let beginExpireTime,endExpireTime;
            if( this.daterange ) {
                beginExpireTime = this.daterange[0]? new Date(this.daterange[0].replace(/-/g,"/")).Format("yyyy-MM-dd HH:mm:ss") : null;
                endExpireTime = this.daterange[1]? new Date(this.daterange[1].replace(/-/g,"/")).Format("yyyy-MM-dd HH:mm:ss") : null;
            } else {
                beginExpireTime = null;
                endExpireTime = null;
            }
            return Object.assign({}, this.form, {
                beginExpireTime: beginExpireTime,
                endExpireTime: endExpireTime,
            });
        }
    },
    created() {
        this.fetchAgentRoleList();
        this.fetchData();
        this.fetchAddressData();
    },
    methods: {
        fetchAgentRoleList() {
            agentRoleList().then(res => {
                console.log( res );
                let data = res.data;
                for ( let i=0;i<data.length;i++ ) {
                    let item = data[i];
                    // console.log(item);
                    this.newRoleId[item.id] = item.name;
                }
                console.log('测试',this.newRoleId);
            });
        },
        fetchAddressData() {
            getLowerAreas({id: 0}).then( res => {
                // console.log( res );
                this.province = res.data;
            })
        },
        getNextLevel(nextLevel, id) {
            getLowerAreas( {id: id} ).then( res => {
                this[nextLevel] = res.data;
            })
        },
        opt(id, optType){
            opt( {id: id, optType: optType} ).then( res => {
                console.log( res );
                if( res.code == 200 ) {
                    alert('改变成功');
                    window.location.reload();
                }
            })
        },
        goDetail(id) {
            // window.location.href = '#/agent/detail?id=' + id;
            this.$router.push({
                name: "agent-detail",
                query:{
                    id:id
                }
            });
        },
        jumpAdd() {
            // window.location.href = '#/agent/add';
            this.$router.push({
                name: "agent-add",
            });
        },
        goEdit(id) {
            // window.location.href = '#/agent/edit?id=' + id;
            this.$router.push({
                name: "agent-edit",
                query:{
                    id:id
                }
            });
        },
        fetchData() {
            this.listLoading = true;
            console.log( '调试', this.listQuery );
            getAgentList(this.listQuery).then(response => {
                console.log( response.data );
                this.list = response.data.data;
                // this.priceCount = response.data.priceCount;
                // this.total_count = response.data.total_count;
                // this.current_page = response.data.current_page;
                // this.max_page = response.data.max_page;
                this.listLoading = false;
                console.log( this.list );
                this.total_count = response.data.total_count;
            });
        },
        onSubmit() {
            this.fetchData();
        },
        check(index, row) {
            this.$router.push({
                name: 'order-check',
                params: {
                    id: row.id
                }
            });
        },
        edit(index, row) {
            this.$router.push({
                name: 'order-edit',
                params: {
                    id: row.id
                }
            });
        },
        currentPageChange(page) {
            this.form.pageIndex = page;
            this.fetchData();
        }
    }
};
</script>

<style lang="scss" scoped>
.app-container {
    .title {
        font-size: 30px;
        color: #606266;
        line-height: 40px;
        .add-agent-button {
            font-size: 18px;
            float: right;
            margin-right: 40px;
        }
    }
    .red {
        color: #F56C6C;
    }
    .block {
        margin: 50px 0 30px;
        text-align: center;
    }

}
</style>
