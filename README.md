## react-router4-mobx-template

一个基于 create-react-app、react-router、mobx 的基础项目模板

### mobx 使用注意事项
 * 延迟对象属性地解引用
 * 不要吝啬使用 @observer，子组件只要用到 mobx 管理的数据就要加上 @observer
 * 不要吝啬使用 @action，凡是涉及到对应用状态变量修改的函数，都应该使用 @action 修饰符。
 * 在异步函数中不要直接修改状态，应该调用同步函数修改（此处为性能考虑，@action 修饰后只有同步函数默认使用 transaction 修改状态，可以避免重复渲染 react 组件）
 * 应用初始化时设置 mobx.useStrict(true) ，状态只能由 @action 函数修改