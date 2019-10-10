/*
Navicat MySQL Data Transfer

Source Server         : 杨帆mysql
Source Server Version : 50718
Source Host           : cdb-ia5rdai6.bj.tencentcdb.com:10202
Source Database       : hook

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2019-10-04 20:11:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for lock
-- ----------------------------
DROP TABLE IF EXISTS `lock`;
CREATE TABLE `lock` (
  `id` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL DEFAULT '0' COMMENT '状态：1打开 0关闭',
  `recent` tinyint(4) unsigned NOT NULL DEFAULT '0' COMMENT '衣架升降状态：0收回，1挂衣，2晾衣',
  `pwd` varchar(255) NOT NULL DEFAULT '0' COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lock
-- ----------------------------
INSERT INTO `lock` VALUES ('1', '0', '0', '0');
INSERT INTO `lock` VALUES ('2', '0', '0', '0');
INSERT INTO `lock` VALUES ('3', '0', '0', '0');
INSERT INTO `lock` VALUES ('4', '0', '0', '0');
INSERT INTO `lock` VALUES ('5', '0', '0', '0');
