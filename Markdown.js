var Text = React.createClass({
	getInitialState: function(){
		return {
			value:'欢迎使用Markdown编辑器\n=======\nMarkdown是一种轻量级的「标记语言」\n-----------\n* 专注你的文字内容而不是排版样式。\n* 轻松的导出 HTML、PDF 和本身的 .md 文件。\n* 纯文本内容，兼容所有的文本编辑器与字处理软件。\n* 可读，直观。适合所有人的写作语言。\n\n'
		};
	},
	updatevalue: function(valuecon){
		this.setState({value: valuecon});
	},
	markdowned: function(valuemd){
		var mark = marked(valuemd);
			return { __html: mark};
	},
	getvalue: function(){
		var gettextvalue = this.refs.mytextarea.value;
		this.updatevalue(gettextvalue);
	},
	render: function(){
		return (
			<div className="box">
					<div className="content" dangerouslySetInnerHTML={this.markdowned(this.state.value)} />
					<textarea cols="60" rows="30" autofocus type="text" ref="mytextarea" value={this.state.value} onChange={this.getvalue} className="text"/>
			</div>
		);
	},
});
ReactDOM.render(
	<Text />,
	document.body
);