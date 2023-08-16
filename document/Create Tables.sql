-- DB 생성
CREATE DATABASE serveyDB;
-- 사용자 생성
CREATE USER myservey@localhost IDENTIFIED BY '12341234';
-- 권한
GRANT ALL PRIVILEGES ON serveyDB.* TO myservey@localhost;
-- 권한적용 
FLUSH PRIVILEGES;

-- footprintDB 사용시작
use serveyDB;

-- 설문제목
DROP TABLE IF EXISTS tbl_sub;
CREATE TABLE tbl_sub(
	sub_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
	sub_title	VARCHAR(20)	NOT NULL,	
	sub_summary	VARCHAR(100)			
);

-- 질문
DROP TABLE IF EXISTS tbl_question;
CREATE TABLE tbl_question(
	qu_seq	BIGINT	NOT NULL	PRIMARY KEY	AUTO_INCREMENT,
	qu_innerNum	BIGINT	NOT NULL,		
	qu_subseq	BIGINT	NOT NULL,		
	qu_question	VARCHAR(100)	NOT NULL	
);

-- 설문응답자
DROP TABLE IF EXISTS tbl_member;
CREATE TABLE tbl_member(
	mem_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
	mem_name	VARCHAR(20)	NOT NULL,	
	mem_email	VARCHAR(40),		
	mem_tel	VARCHAR(15)		
);

-- 설문응답
DROP TABLE IF EXISTS tbl_reply;
CREATE TABLE tbl_reply(
	rep_seq	BIGINT	AUTO_INCREMENT	PRIMARY KEY,
	rep_con	INT	NOT NULL,	
	rep_memseq	BIGINT	NOT NULL,	
	rep_quseq	BIGINT	NOT NULL,	
	rep_subseq	BIGINT	NOT NULL	
);

ALTER TABLE tbl_reply
DROP FOREIGN KEY tbl_reply_ibfk_2;

ALTER TABLE tbl_question
ADD FOREIGN KEY (qu_subseq) REFERENCES tbl_sub(sub_seq);

ALTER TABLE tbl_reply
ADD FOREIGN KEY (rep_memseq) REFERENCES tbl_member(mem_seq);
ALTER TABLE tbl_reply
ADD FOREIGN KEY (rep_quseq) REFERENCES tbl_question(qu_seq);


-----------------------------------------------
SELECT * FROM tbl_sub;
SELECT * FROM tbl_question;

INSERT INTO tbl_question(qu_innerNum, qu_subseq, qu_question)
VALUES (1, 5, "우리의 질문은 없고 능력이 증가하고 취직을 잘해서 행복하고 싶어요");


