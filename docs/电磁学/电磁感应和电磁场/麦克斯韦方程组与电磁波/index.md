---
title: "麦克斯韦方程组与电磁波"
lastmod: "2024-12-23T21:49:21+08:00"
description:
math:
---
# 麦克斯韦方程组与电磁波

## 位移电流
在[安培环路定理](/电磁学/恒定磁场/磁场中的磁介质#有磁介质时的安培环路定理/)中
有以下公式
$$\oint_L \boldsymbol{H} \cdot d\boldsymbol{l} = \sum I_{\text{0内}}$$
其中 $\sum I_{\text{0内}}$ 是通过环路 $L$ 内的电流之和，可以通过[电流密度](/电磁学/恒定磁场/恒定电流#电流密度/) $\boldsymbol{J_c}$ 来表示
即
$$\oint_L \boldsymbol{H} \cdot d\boldsymbol{l} = \int_S \boldsymbol{J_c} \cdot d\boldsymbol{S}$$
这一安培环路定理只适用于稳定电流
当非稳定电流通过导体时，导体内部会产生**位移电流**，即由于电场的变化而产生的电流  
使用[高斯定理](/电磁学/静电场中的导体和电介质/有介质时的高斯定理#/)可以得到  
$$\boldsymbol{J_d} = \frac{\partial \boldsymbol{D}}{\partial t}$$
$$I_d = \int_S \boldsymbol{J_d} \cdot d\boldsymbol{S} = \int_S \frac{\partial \boldsymbol{D}}{\partial t} \cdot d\boldsymbol{S} = \frac{d\Phi_d}{dt}$$
其中 $\Phi_d$ 电位移通量， $\boldsymbol{D}$ 电位移矢量
称 $\boldsymbol{J_d}$ 为**位移电流密度**， $I_d$ 为**位移电流**

$$\oint_{S_1} \boldsymbol{J_c}
\cdot d\boldsymbol{S} + \oint_{S_2} \boldsymbol{J_d} \cdot d\boldsymbol{S} = 0$$
即，流入曲面 $S_1$ 的传导电流等于流出曲面 $S_2$ 的位移电流

## 安培环路定理的普遍表达式
$$\oint_L \boldsymbol{H} \cdot d\boldsymbol{l} = I_c + I_d = \int_S \left(\boldsymbol{J_c} + \frac{\partial \boldsymbol{D}}{\partial t} \right) \cdot d\boldsymbol{S}$$

上式是安培环路定理的普遍表达式，表明磁场强度 $\boldsymbol{H}$ 沿任意闭合回路的环流等于穿过以回路为边界的任意曲面的传导电流和位移电流之和

就磁效应而言，位移电流和传导电流是等效的，都是磁场的源
但是二者本质上是不同的，传导电流是由导体中电荷的移动产生的，而位移电流是由电场的变化产生的，无论是否有导体存在，只要电场的变化，就会产生位移电流

## 麦克斯韦方程组
$$\begin{aligned}
\oint_S \boldsymbol{D} \cdot d\boldsymbol{S} &= \int_V \rho dV = q_0  \newline 
\oint_L \boldsymbol{E} \cdot d\boldsymbol{l} &= -\int_S \frac{\partial \boldsymbol{B}}{\partial t} \cdot d\boldsymbol{S}  \newline 
\oint_S \boldsymbol{B} \cdot d\boldsymbol{S} &= 0  \newline 
\oint_L \boldsymbol{H} \cdot d\boldsymbol{l} &= I_c + \int_S \frac{\partial \boldsymbol{D}}{\partial t} \cdot d\boldsymbol{S}
\end{aligned}$$


$$\begin{aligned}
\nabla \cdot \boldsymbol{D} &= \rho  \newline 
\nabla \times \boldsymbol{E} &= -\frac{\partial \boldsymbol{B}}{\partial t}  \newline 
\nabla \cdot \boldsymbol{B} &= 0 \newline 
\nabla \times \boldsymbol{H} &= \boldsymbol{J} + \frac{\partial \boldsymbol{D}}{\partial t}  \newline 
\end{aligned}$$

$$\begin{aligned}
\boldsymbol{D} &= \varepsilon \boldsymbol{E}  \newline 
\boldsymbol{B} &= \mu \boldsymbol{H}  \newline 
\boldsymbol{J} &= \sigma \boldsymbol{E}
\end{aligned}$$

$$\boldsymbol{F}_L = q(\boldsymbol{E} + \boldsymbol{v} \times \boldsymbol{B})$$
