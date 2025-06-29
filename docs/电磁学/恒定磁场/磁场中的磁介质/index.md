---
title: "磁场中的磁介质"
lastmod: "2024-12-23T01:33:49+08:00"
description:
math:
---
# 磁介质对磁场的影响

## 磁介质对磁场的影响
类比[电介质对电场的影响](/电磁学/静电场中的导体和电介质/静电场中的电介质#电极化强度/)，有介质时的磁场可以被表示为  
$$\boldsymbol{B} = \boldsymbol{B_0} + \boldsymbol{B}'$$

其中，$\boldsymbol{B}$ 是介质中的磁感应强度，$\boldsymbol{B_0}$ 原磁场，$\boldsymbol{B}'$ 是介质产生的磁场。

根据实验表明，磁介质内的磁感应强度 $\boldsymbol{B}$ 为真空时的 $\mu_r$ 倍，即
$$\boldsymbol{B} = \mu_r \boldsymbol{B_0}$$
式中，$\mu_r$ 是磁介质的相对磁导率，为无量纲量。

## 磁介质的种类
### 顺磁质
$$\mu_r > 1$$

### 抗磁质
$$\mu_r < 1$$

### 铁磁质
顺磁质和抗磁质的混合体的 $\mu_r$ 接近于1，而铁磁质的 $\mu_r$ 远大于1。  
$\boldsymbol{B}$ 和 $\boldsymbol{B}'$ 方向相同，内部磁场被大大增强。

## 磁介质的磁化
磁介质内由大量杂乱的 **分子磁矩** 组成，可以用等效的圆电流即 **[分子电流](/电磁学/恒定磁场/磁场和磁感应强度#安培分子电流假说/)** 来描述
有外磁场时，磁介质的状态就会发生变化，这种现象称为 **磁化** 。

- 顺磁质在外磁场的作用下，分子磁矩的方向与外磁场方向一致，磁介质内部的磁场增强。  
- 抗磁质在外磁场的作用下，在原有的磁矩方向上产生一个与外磁场方向相反的磁矩，磁介质内部的磁场减弱。  

这些方向相同的附加磁矩的矢量和就是一个分子在外磁场中产生的 **感生磁矩**。

## 磁化强度
$$\boldsymbol{M} = \frac{\sum \boldsymbol{m}}{V}$$

## 磁化电流
$$I' = \oint_L \boldsymbol{M} \cdot d\boldsymbol{l}$$

## 有磁介质时的安培环路定理
类似于[有介质时的高斯定理](/电磁学/静电场中的导体和电介质/有介质时的高斯定理#/)，通过引入适当的物理量可以简化问题。

$$\oint_L \boldsymbol{B} \cdot d\boldsymbol{l} = \mu_0 (\sum I_{\text{0内}} + I'_{\text{内}})$$  
移项得到  
$$\oint_L \left(\frac{\boldsymbol{B}}{\mu_0} - \boldsymbol{M}\right) \cdot d\boldsymbol{l} = \sum I_{\text{0内}}$$

引入**磁场强度** $\boldsymbol{H}$，定义为
$$\boldsymbol{H} = \frac{\boldsymbol{B}}{\mu_0} - \boldsymbol{M}$$

故安培环路定理可以简化为  
$$\oint_L \boldsymbol{H} \cdot d\boldsymbol{l} = \sum I_{\text{0内}}$$

## 磁化强度与磁场强度的关系
$$\boldsymbol{M} = \chi_m \boldsymbol{H}$$  
式中，$\chi_m$ 为磁化率，是无量纲量。

代入 $$\boldsymbol{H} = \frac{\boldsymbol{B}}{\mu_0} - \boldsymbol{M}$$
得到
$$\boldsymbol{B} = \mu_0 (\boldsymbol{H} + \boldsymbol{M}) = \mu_0 (1 + \chi_m) \boldsymbol{H} = \mu_0 \mu_r \boldsymbol{H} = \mu \boldsymbol{H}$$  
即
$$\boldsymbol{B} = \mu \boldsymbol{H}$$  

$\mu_r = 1 + \chi_m$ 为磁介质的相对磁导率，$\mu = \mu_0 \mu_r$ 为磁介质的磁导率。

