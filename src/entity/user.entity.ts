import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class UserModel{
    // ID
     @PrimaryGeneratedColumn() // : 자동으로 ID를 생성한다.
    // @PrimayColumn : 자동으로는 생성 안하는 PK

    //@PrimaryGeneratedColumn('uuid') // : 랜덤 string이 생기는 듯 : 9592d698-b493-4a2a-a900-af73d12eb08f
    id: number;

    // 제목
    @Column()
    title: string;

    // 데이터 생성 일자
    @CreateDateColumn() // 데이터가 생성되는 날짜와 시간이 자동으로 찍힌다. : 2024-07-22T04:51:09.637Z
    createdAt: Date;

    // 데이터 업데이트 일자
    @UpdateDateColumn() // 업데이트 되는 날짜와 시간이 자동으로 찍힌다. : 2024-07-22T04:51:09.637Z
    updatedAt: Date;

    // 데이터가 업데이트 될때마다 1씩 올라간다.
    // 처음 생성되면 값은 1이다.
    // save() 함수가 몇번 불렸는지 기억한다.
    @VersionColumn()
    version: number;

    @Column()
    @Generated('increment') // 데이터를 생성할 때마다 자동으로 1씩 올라간다.
    additionalId: number;


}