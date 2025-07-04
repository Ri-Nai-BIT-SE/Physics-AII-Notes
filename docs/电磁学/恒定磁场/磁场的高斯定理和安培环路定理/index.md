---
title: "磁场的高斯定理和安培环路定理"
lastmod: "2024-12-22T23:26:42+08:00"
description:
math:
---
# 磁场的高斯定理和安培环路定理

## 磁通量
类比于[静电场中引入的电通量](/电磁学/静电场/静电场的高斯定理#电场强度通量/)，定义磁场中的磁通量为
$$\varPhi = \int \boldsymbol{B} \cdot d\boldsymbol{S}$$
在国际单位制中，磁通量的单位是韦伯，符号是 $\text{Wb}$。
$$1\text{Wb} = 1\text{T} \cdot \text{m}^2$$

## 磁场的高斯定理
由于磁场线是无头无尾的闭合曲线，从封闭曲面 $S$ 中穿出的磁场线必然会再次进入封闭曲面 $S$，因此磁场的高斯定理为

$$\oint \boldsymbol{B} \cdot d\boldsymbol{S} = 0$$

## 安培环路定理
[在静电场中，电场强度的环流等于零](/电磁学/静电场/静电场的环路定理与电势#环路定理/)，即
$$\oint \boldsymbol{E} \cdot d\boldsymbol{l} = 0$$

从[毕奥-萨伐尔定律](./电磁学/恒定磁场/毕奥-萨伐尔定律/)可以得到安培环路定理
安培环路定理的表述为：在恒定电流的磁场中，磁感应强度 $\boldsymbol{B}$ 沿任意闭合曲线 $L$ 的线积分（即环流）等于通过该闭合曲线内的电流代数和的 $\mu_0$ 倍。  
即 
$$\oint_L \boldsymbol{B} \cdot d\boldsymbol{l} = \mu_0 \sum I_{\text{内}}$$
式中，$\sum I_{\text{内}}$ 是通过环路 $L$ 内的电流代数和。  
电流的正负号由电流的方向决定，若电流与环路的方向一致，则电流为正，否则为负。

![安培环路示意图](./../../../imgs/安培环路示意图.png)

## 安培环路定理的推导
若闭合曲线内包含有电流
取线元 $d\boldsymbol{l}$，在 $O$ 点处的距离为 $r$ ，张角为 $d\varphi$ ，与 $d\boldsymbol{l}$ 的夹角为 $\theta$。则有

$$rd\varphi = d\boldsymbol{l} \cdot \boldsymbol{r} = rdl\cos\theta$$
$$\oint_L \boldsymbol{B} \cdot d\boldsymbol{l} = \oint_L Bdl\cos\theta =\oint_L Brd\varphi = \int_{0}^{2\pi} \frac{\mu_0 I}{2\pi r} rd\varphi = \mu_0 I$$

不包含电流时可以证明积分区域是两段角度互补的区域，所以积分为零。

![磁矩示意图](./../../../imgs/磁矩示意图.png)
