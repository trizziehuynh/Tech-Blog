const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  comment_body: {
    type: DataTypes.STRING,
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "post",
      key: "id",
    },
  },
  user_id:{
    type:DataTypes.INTEGER,
    references:{
      model:"user",
      key:"id",
    }
  }
},{
  sequelize,
  timestamps:false,
  underscored:true,
  modelName:"comments",
});

module.exports=Comment;
