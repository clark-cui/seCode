"v-if"根据条件进行渲染，切换过程中显示隐藏是适当对子组件进行销毁重建；
"v-show"不管初始条件直接渲染元素，显示隐藏只是改变css的display属性；
“v-if"触发重排，切换消耗高；
“v-show"触发重绘，初始渲染开销高，