import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class UserModel{
    // ID
     @PrimaryGeneratedColumn() // : 자동으로 ID를 생성한다.
    // @PrimayColumn : 자동으로는 생성 안하는 PK

    //@PrimaryGeneratedColumn('uuid') // : 랜덤 string이 생기는 듯 : 9592d698-b493-4a2a-a900-af73d12eb08f
    id: number;

    // 제목
    @Column({
        // 데이터베이스에서 인지하는 컬럼 타입
        // 자동으로 유추됨
        type: 'varchar',
        // 데이터베이스 컬럼 이름
        // 프로퍼티 이름으로 자동 유추됨
        name: 'title',
        // 값의 길이
        // 입력할 수 있는 글자의 길이가 300
        length: 300,
        // null이 가능한지
        nullable: true,
        // true면 처음 저장할때만 값 지정 가능
        // 이후에는 값 변경 불가능,
        update: false,
        // 기본값
        // 아무것도 입력 안 했을 떄 기본으로 입력되게 되는 값
        default: 'default value',
        // 컬럼 유니크 해야 하는지
        unique: false,
    })
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