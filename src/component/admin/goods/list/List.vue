<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>

        <section class="list_btns">
            <el-button plain size="mini" icon="el-icon-plus">新增</el-button>
            <el-button plain size="mini" icon="el-icon-check">全选</el-button>
            <el-button plain size="mini" icon="el-icon-delete">删除</el-button>

            <div class="list_btns_right">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" label-width="200px" size="mini">
                </el-input>
            </div>
        </section>

    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
    .list_btns {
    margin-top: 30px;
    &_right {
        float: right;
        width: 200px;
    }
    }
</style>