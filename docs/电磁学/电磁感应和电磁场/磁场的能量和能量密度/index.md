---
title: "磁场的能量和能量密度"
lastmod: "2024-12-23T21:29:49+08:00"
description:
math:
---
# 磁场的能量和能量密度

## 自感感能
与[电容器](/电磁学/静电场中的导体和电介质/静电场的能量#电容器的能量/)类似，线圈中也可以储存能量。
当自感系数为 $L$ 的线圈中通过电流 $I$ 时，线圈中的磁场能量为
$$W = \frac{1}{2} L I^2$$

载流线圈中储存的能量称为 **自感感能**。

## 磁场的能量密度
在通电螺线管中
$$W_m = \frac{1}{2} L I^2 = \frac{1}{2} \mu n^2 I^2 V = \frac{1}{2} \frac{B^2}{\mu} V$$
故磁场的能量密度为
$$w_m = \frac{W_m}{V} = \frac{1}{2} \frac{B^2}{\mu}$$
考虑到磁感应强度 $B$ 和磁场强度 $H$ 的关系
$$B = \mu H$$
可得
$$w_m = \frac{1}{2} B H = \frac{1}{2} \mu H^2 = \frac{1}{2} \boldsymbol{B} \cdot \boldsymbol{H}$$

虽然这条公式是从通电螺线管的能量公式推导出来的，但是可以证明，他对任何磁场都是普遍成立的。

## 磁场能量和电场能量的对比
| | 存储在电容或电感中的能量 | 存储在电场或磁场中的能量 |
| :--- | --- | --- |
| 电场能量 | $$W_e = \frac{1}{2} CU^2$$ | $$w_e = \frac{1}{2} \boldsymbol{D} \cdot \boldsymbol{E}$$ <br> $$W_e = \int_V w_e dV$$ |
| 磁场能量 | $$W_m = \frac{1}{2} L I^2$$ | $$w_m = \frac{1}{2} \boldsymbol{B} \cdot \boldsymbol{H}$$ <br> $$W_m = \int_V w_m dV$$ |

若空间中既有电场又有磁场，则总能量密度为
$$w = w_e + w_m = \frac{1}{2} \boldsymbol{D} \cdot \boldsymbol{E} + \frac{1}{2} \boldsymbol{B} \cdot \boldsymbol{H}$$
