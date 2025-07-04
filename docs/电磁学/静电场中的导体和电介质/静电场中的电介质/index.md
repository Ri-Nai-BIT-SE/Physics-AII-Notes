---
title: "静电场中的电介质"
lastmod: "2024-12-18T02:11:57+08:00"
description:
math:
---
# 静电场中的电介质
## 电介质对电场的影响
在平行板间充入电介质的时候，电势差和电场都会变小，并且有如下关系：
$$U = \frac{U_0}{\varepsilon_r}, \quad E = \frac{E_0}{\varepsilon_r}$$
其中，$U_0$ 和 $E_0$ 分别是真空中的电势差和电场强度，$\varepsilon_r$ 是电介质的相对介电常数，除真空中 $\varepsilon_0 = 1$ 之外，$\varepsilon_r$ 都大于1。

## 电介质的极化
虽然无极分子电介质和极分子电介质的微观机制不同，但在宏观上，都表现为在均匀电介质表面出现**束缚电荷**。（表面没有自由电荷）
**自由电荷**是一种等效概念，常指存在于物质内部，再外电场作用下能做定向移动的电荷，如金属导体中的自由电子，电解质中的离子等。
**但由于电介质极化产生的束缚电荷不是自由电荷**

束缚电荷与自由电荷的共同之处是它们都会产生静电场。

## 电极化强度
点极化强度定义为单位体积内分子电偶极矩的矢量和，记作 $\boldsymbol{P}$，则有：
$$\boldsymbol{P} = \frac{\sum \boldsymbol{p_i}}{\Delta V}$$
在国际化单位制中，电极化强度的单位是 $\mathrm{C/m^2}$。  
它的量纲与电荷面密度相同

对无极分子构成的电介质，由于每个分子的感生电矩 $\boldsymbol{p_i}$ 都相同，故有：
$$\boldsymbol{P} = n \boldsymbol{p}$$
在外电场中，若电介质内各点的电极化强度 $\boldsymbol{P}$ 的大小和方向都相同，则称电介质为**均匀电介质**，否则称为**非均匀电介质**。

在外电场 $\boldsymbol{E_0}$ 中极化的电介质表面以及体内出现的束缚电荷 $q'$ 也要产生电场 $\boldsymbol{E}'$.  
根据电场叠加原理，电介质内部的电场 $\boldsymbol{E}$ 为外电场 $\boldsymbol{E_0}$ 和极化电场 $\boldsymbol{E}'$ 的矢量和，即：
$$\boldsymbol{E} = \boldsymbol{E_0} + \boldsymbol{E}'$$

实验证明，当电介质内电场 $\boldsymbol{E}$ 不大强的时候，各向同性的均匀电介质的电极化强度 $\boldsymbol{P}$ 与电场 $\boldsymbol{E}$ 之间的关系是线性的，即：
$$\boldsymbol{P} = \varepsilon_0 \chi_e \boldsymbol{E}$$
其中，$\chi_e$ 是电介质的电极化率，为无量纲量。其数值上等于 $\varepsilon_r - 1$。
## 极化强度与极化电荷的关系
![极化强度与极化电荷的关系](./../../../imgs/极化强度与极化电荷的关系.png)
$$dq' = \boldsymbol{P} \cdot d\boldsymbol{S}$$
$$\frac{dq'}{dS} = \boldsymbol{P} \cdot \boldsymbol{e_n} = P \cos \theta$$

故在一个闭合曲面内满足：
$$\oint_S \boldsymbol{P} \cdot d\boldsymbol{S} = -\sum q'_{内}$$

当面元 $d \boldsymbol{S}$ 在电介质表面的时候，有：
$$\sigma_e' = \boldsymbol{P} \cdot \boldsymbol{e_n} = P \cos \theta = P_n$$
