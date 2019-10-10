/*
Navicat MySQL Data Transfer

Source Server         : 杨帆mysql
Source Server Version : 50718
Source Host           : cdb-ia5rdai6.bj.tencentcdb.com:10202
Source Database       : hook

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2019-10-04 20:11:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for open
-- ----------------------------
DROP TABLE IF EXISTS `open`;
CREATE TABLE `open` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `code` varchar(255) NOT NULL DEFAULT '' COMMENT '用户code',
  `session_key` varchar(255) NOT NULL DEFAULT '' COMMENT '本次登录的会话密钥',
  `openid` varchar(255) NOT NULL DEFAULT '' COMMENT '用户标识',
  `expire` bigint(20) unsigned NOT NULL COMMENT '过期时间',
  PRIMARY KEY (`id`),
  KEY `code` (`code`) USING BTREE,
  KEY `session_key` (`session_key`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of open
-- ----------------------------
