# Host: localhost  (Version: 5.5.53)
# Date: 2020-07-10 13:52:45
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "cart"
#

CREATE TABLE `cart` (
  `product_id` varchar(300) NOT NULL,
  `product_name` varchar(300) NOT NULL,
  `product_img` varchar(300) NOT NULL DEFAULT '',
  `product_price` varchar(30) NOT NULL,
  `product_num` varchar(30) NOT NULL,
  `submission_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "cart"
#

INSERT INTO `cart` VALUES ('1','买3发4 茶叶 乌龙茶 黑乌龙茶 新茶250g浓香型 唐寨山','https://img12.360buyimg.com/n12/s450x450_jfs/t1/48597/40/1361/271683/5cf294d4E2ac5cf07/fe625ddf4f80ec5d.png','16.8','39','2020-07-10 12:26:54'),('9','7000年和田玉羊脂级玉貔貅手串女士南红配珠手链6mm串珠 带证书 小叶紫檀190621001','https://img12.360buyimg.com/mobilecms/s450x450_jfs/t1/123626/16/6604/256103/5f067c09E3d325c07/e1161ccfeca9b09a.jpg','664','71','2020-07-10 12:25:26');

#
# Structure for table "product"
#

CREATE TABLE `product` (
  `product_id` varchar(300) NOT NULL,
  `product_name` varchar(300) NOT NULL,
  `product_img` varchar(300) NOT NULL DEFAULT '',
  `product_price` varchar(30) NOT NULL,
  `product_num` varchar(30) NOT NULL,
  `submission_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "product"
#

INSERT INTO `product` VALUES ('1','买3发4 茶叶 乌龙茶 黑乌龙茶 新茶250g浓香型 唐寨山','https://img12.360buyimg.com/n12/s450x450_jfs/t1/48597/40/1361/271683/5cf294d4E2ac5cf07/fe625ddf4f80ec5d.png','16.8','','2020-07-09 18:14:42'),('2','DOSERMO丹西摩男装秋冬款时尚简约男士商务休闲西服修身格子百搭宽短款西装便西061173645 黑色 48','https://img11.360buyimg.com/mobilecms/s450x450_jfs/t1/128534/38/6678/365108/5f0594f9Eddfec886/737db8c32a3391fa.jpg','4380','','2020-07-09 18:52:01'),('3','柠乐 小米cc9全屏覆盖钢化膜美图定制版小米cc9e全透明抗蓝光防摔防爆防指纹高清全复盖玻璃膜适用于 小米cc9e【混合 1蓝光+2高清】三片装送10礼','https://img12.360buyimg.com/mobilecms/s450x450_jfs/t1/68967/30/3611/139155/5d1de9b8Ef07730d3/39e1a69613de4344.jpg','20','','2020-07-09 18:51:04'),('4','劳士顿 【华少代言品牌表】日本进口机芯男士手表男表防水2019年新款运动蓝宝石镜面日历腕表石英表男 时尚炫酷蓝.米兰带','https://img11.360buyimg.com/mobilecms/s450x450_jfs/t1/145583/15/2452/248180/5f05f0f1E7ada9389/920409812043a0d6.jpg','549','','2020-07-09 18:51:46'),('5','TCL 50T6 50英寸4K超高清HDR超薄全面屏全场景AI免遥控人工智能语音液晶电视机','https://img11.360buyimg.com/n12/s450x450_jfs/t1/89386/26/15278/517005/5e709d9fEfaec7f0b/d19752ad66ac2312.png','1999','','2020-07-09 18:51:18'),('6','器美优品 金镶玉紫砂黑泥盖碗 纯手工三才碗陶瓷家用泡茶杯功夫茶具 紫砂黑泥金镶玉腾龙-单盖碗','https://img12.360buyimg.com/mobilecms/s450x450_jfs/t1/49875/20/10637/128715/5d7b50ecE992358a3/a5c693e92fe85509.jpg','385','','2020-07-09 18:52:24'),('7','WNS airpods保护套1/2代苹果airpods无线蓝牙耳机套硅胶不沾灰微磨砂防滑防摔壳收纳盒 大眼蛙【绿色】','https://img12.360buyimg.com/mobilecms/s450x450_jfs/t1/97468/8/12645/135798/5e4d24efE04f89e03/64b473a7db6d4a34.jpg','28.9','','2020-07-09 18:52:26'),('8','\r\nTCL 50T6 50英寸4K超高清HDR超薄全面屏全场景AI免遥控人工智能语音液晶电视机','https://img10.360buyimg.com/n12/s450x450_jfs/t1/89386/26/15278/517005/5e709d9fEfaec7f0b/d19752ad66ac2312.png','1999.0','','2020-07-09 18:53:35'),('9','7000年和田玉羊脂级玉貔貅手串女士南红配珠手链6mm串珠 带证书 小叶紫檀190621001','https://img12.360buyimg.com/mobilecms/s450x450_jfs/t1/123626/16/6604/256103/5f067c09E3d325c07/e1161ccfeca9b09a.jpg','664','','2020-07-09 18:53:33');
