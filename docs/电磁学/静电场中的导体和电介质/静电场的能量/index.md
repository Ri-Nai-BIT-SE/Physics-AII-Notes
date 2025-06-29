---
title: "静电场的能量"
lastmod: "2024-12-18T02:11:57+08:00"
description:
math:
---
# 静电场的能量
## 电荷系的静电能
$$W_e = \frac{1}{2} \sum q_i \varphi_i$$
或者
$$W_e = \frac{1}{2} \int_q \varphi dq$$

## 电容器的能量
$$W_e = \frac{1}{2} CU^2 = \frac{1}{2} \frac{Q^2}{C}$$

### 平行板电容器
代入 $C = \frac{\varepsilon S}{d}$ 可得
$$W_e = \frac{1}{2} \frac{\varepsilon S}{d} (Ed)^2 = \frac{1}{2} \varepsilon E^2 S d$$

## 静电场的能量与能量密度

根据 平行板电容器 的能量公式，我们知道平行板电容器的能量和电场强度有关。  
更普遍的说，电能的携带者是电场。

单位体积中的电场能量密称为电场能量密度，记作 $w_e$，即
$$w_e = \frac{dW_e}{dV}$$  

由于平行板电容器的电场是均匀的，所以电场能量密度是均匀的，即
$$w_e = \frac{W_e}{V} = \frac{1}{2} \varepsilon E^2 = \frac{1}{2} D E$$
该式虽然是从平行板电容器的能量公式推导出来的，但是对**各向同性的电介质**都是普遍成立的。
**在各向异性的电介质中**，$\boldsymbol{D}$ 和 $\boldsymbol{E}$ 的方向不一定相同，但是它们之间的关系仍然是
$$w_e = \frac{1}{2} \boldsymbol{D} \cdot \boldsymbol{E}$$

对于任意电场，空间 $V$ 内的总电场能量 $W_e$ 可以体由积分求得，即
$$W_e = \int_V w_e dV = \frac{1}{2} \int_V \frac{1}{2} \varepsilon E^2 dV$$  
该积分遍及整个空间，适用于任何各向同性的电介质。

