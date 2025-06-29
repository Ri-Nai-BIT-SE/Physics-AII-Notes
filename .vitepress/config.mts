import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "大学物理AII 学习笔记",
  description: "大学物理AII 电磁学与近代物理学习笔记",
  srcDir: "docs",
  base: "/Physics-AII-Notes/",

  // 禁用死链接检查
  ignoreDeadLinks: true,

  // 启用数学公式支持
  markdown: {
    math: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '电磁学', link: '/电磁学/' },
      { text: '近代物理', link: '/近代物理/' }
    ],
    outline: [2, 5],

    sidebar: {
      '/电磁学/': [
        {
          text: '电磁学',
          link: '/电磁学/',
          collapsed: true,
          items: [
            {
              text: '静电场',
              link: '/电磁学/静电场/',
              collapsed: true,
              items: [
                { text: '库仑定律', link: '/电磁学/静电场/库仑定律/' },
                { text: '电场', link: '/电磁学/静电场/电场/' },
                { text: '电偶极子', link: '/电磁学/静电场/电偶极子/' },
                { text: '静电场的高斯定理', link: '/电磁学/静电场/静电场的高斯定理/' },
                { text: '静电场的环路定理与电势', link: '/电磁学/静电场/静电场的环路定理与电势/' }
              ]
            },
            {
              text: '静电场中的导体和电介质',
              link: '/电磁学/静电场中的导体和电介质/',
              collapsed: true,
              items: [
                { text: '静电场中的导体', link: '/电磁学/静电场中的导体和电介质/静电场中的导体/' },
                { text: '电容与电容器', link: '/电磁学/静电场中的导体和电介质/电容与电容器/' },
                { text: '静电场中的电介质', link: '/电磁学/静电场中的导体和电介质/静电场中的电介质/' },
                { text: '有介质时的高斯定理', link: '/电磁学/静电场中的导体和电介质/有介质时的高斯定理/' },
                { text: '静电场的能量', link: '/电磁学/静电场中的导体和电介质/静电场的能量/' }
              ]
            },
            {
              text: '恒定磁场',
              link: '/电磁学/恒定磁场/',
              collapsed: true,
              items: [
                { text: '恒定电流', link: '/电磁学/恒定磁场/恒定电流/' },
                { text: '磁场和磁感应强度', link: '/电磁学/恒定磁场/磁场和磁感应强度/' },
                { text: '毕奥-萨伐尔定律', link: '/电磁学/恒定磁场/毕奥-萨伐尔定律/' },
                { text: '磁场的高斯定理和安培环路定理', link: '/电磁学/恒定磁场/磁场的高斯定理和安培环路定理/' },
                { text: '磁场对运动电荷的作用', link: '/电磁学/恒定磁场/磁场对运动电荷的作用/' },
                { text: '磁场对载流导线的作用', link: '/电磁学/恒定磁场/磁场对载流导线的作用/' },
                { text: '磁场中的磁介质', link: '/电磁学/恒定磁场/磁场中的磁介质/' }
              ]
            },
            {
              text: '电磁感应和电磁场',
              link: '/电磁学/电磁感应和电磁场/',
              collapsed: true,
              items: [
                { text: '法拉第电磁感应定律', link: '/电磁学/电磁感应和电磁场/法拉第电磁感应定律/' },
                { text: '动生电动势和感生电动势', link: '/电磁学/电磁感应和电磁场/动生电动势和感生电动势/' },
                { text: '自感与互感', link: '/电磁学/电磁感应和电磁场/自感与互感/' },
                { text: '磁场的能量和能量密度', link: '/电磁学/电磁感应和电磁场/磁场的能量和能量密度/' },
                { text: '麦克斯韦方程组与电磁波', link: '/电磁学/电磁感应和电磁场/麦克斯韦方程组与电磁波/' }
              ]
            },
            { text: '常用公式', link: '/电磁学/常用公式/' }
          ]
        },


      ],
      '/近代物理/': [
        {
          text: '近代物理',
          link: '/近代物理/',
          collapsed: true,
          items: [
            {
              text: '狭义相对论力学基础',
              link: '/近代物理/狭义相对论力学基础/',
              collapsed: true,
              items: [
                { text: '狭义相对论的基本原理', link: '/近代物理/狭义相对论力学基础/狭义相对论的基本原理/' },
                { text: '洛伦兹变换', link: '/近代物理/狭义相对论力学基础/洛伦兹变换/' },
                { text: '相对论时空效应', link: '/近代物理/狭义相对论力学基础/相对论时空效应/' },
                { text: '相对论速度变换', link: '/近代物理/狭义相对论力学基础/相对论速度变换/' },
                { text: '相对论力学基础', link: '/近代物理/狭义相对论力学基础/相对论力学基础/' }
              ]
            },
            {
              text: '微观粒子的波粒二象性',
              link: '/近代物理/微观粒子的波粒二象性/',
              collapsed: true,
              items: [
                { text: '光电效应-爱因斯坦光量子理论', link: '/近代物理/微观粒子的波粒二象性/光电效应-爱因斯坦光量子理论/' },
                { text: '康普顿效应', link: '/近代物理/微观粒子的波粒二象性/康普顿效应/' },
                { text: '氢原子光谱-玻尔的氢原子理论', link: '/近代物理/微观粒子的波粒二象性/氢原子光谱-玻尔的氢原子理论/' },
                { text: '粒子的波动性', link: '/近代物理/微观粒子的波粒二象性/粒子的波动性/' },
                { text: '不确定关系', link: '/近代物理/微观粒子的波粒二象性/不确定关系/' }
              ]
            },
            {
              text: '薛定谔方程及其应用',
              link: '/近代物理/薛定谔方程及其应用/',
              collapsed: true,
              items: [
                { text: '薛定谔方程', link: '/近代物理/薛定谔方程及其应用/薛定谔方程/' },
                { text: '原子中的电子', link: '/近代物理/薛定谔方程及其应用/原子中的电子/' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 启用搜索
    search: {
      provider: 'local'
    },

    // 页脚
    footer: {
      message: '大学物理AII 学习笔记',
      copyright: 'Copyright © 2024'
    }
  }
})
