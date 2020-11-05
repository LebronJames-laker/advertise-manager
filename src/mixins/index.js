export const mixin = {
    methods:{
        notify(title,type){
            this.$notify({
                title:title,
                type:type
            })
        },
        //根据相对地址获取绝对地址
        getUrl(url) {
            return `${this.$store.state.HOST}/${url}`
        },
        //获取性别中文
        changeSex(value) {
            if(value == 0) {
                return '女';
            }
            if(value == 1) {
                return '男';
            }
            if(value == 2) {
                return '组合';
            }
            if(value == 3) {
                return '不明';
            }
            return value;
        },
        attachBirth(value){
            return String(value).substr(0,10);
        },
        //上传之前的校验工作
        beforeAvatorUpload(file){
            const isJPGOrPng = (file.type === 'image/jpeg') || (file.type === 'image/png');
            if(!isJPGOrPng){
                this.$message.error('上传头像图片只能是jpg或者是png格式');
                return false;
            }
            const isLt2M = (file.size / 1024 / 1024) < 2;
            if(!isLt2M) {
                this.$message.error('上传的头像大小不能超过2M');
                return false;
            }
            return true;
        },
        //上传成功之后做的处理
        handleAvatorSuccess(res,file){
            let _this = this;
            if(res.code == 1) {
                _this.getData();
                _this.$notify({
                    title:'上传成功',
                    type: 'success'
                })
            }else{
                _this.$notify({
                    title:'上传失败',
                    type: 'error'
                })
            }
        },
        handleDelete(id) {
            this.idx = id;
            this.deleteVisible = true;

        },
        //将选择的项赋值到multipleSelection
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //批量删除
        deleteAll() {
            for(let item of this.multipleSelection) {
                this.handleDelete(item.id);
                this.deleteRow()
            }
            //清空
            this.multipleSelection = [];
        }
    }
}