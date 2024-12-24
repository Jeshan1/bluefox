import { Table,Column,Model, DataType, PrimaryKey, AllowNull } from "sequelize-typescript";

@Table({
    tableName:'users',
    modelName:'User',
    timestamps:true
})

class User extends Model {
    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    declare id:string

    @Column({
        type:DataType.STRING
    })
    declare username:string

    @Column({
        type:DataType.STRING
    })
    declare email:string

    @Column({
        type:DataType.STRING
    })
    declare password:string

    @Column({
        type:DataType.ENUM("admin","company","hr","employee"),
        defaultValue:"admin"
    })
    declare role:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare otp:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare otpgeneratedtime:string
}


export default User

