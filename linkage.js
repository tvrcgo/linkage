(function(root, factory){

	if ( typeof define === 'function' && define.cmd ) {
		define(function(require){
			var $ = require('jquery');
			$.fn.linkage = factory;
		});
	}
	else {
		var $ = root.$ || root.jQuery;
		$.fn.linkage = factory;	
	}

})(window, function(opt){

	var _this = $(this);
	var selects = opt.selects || [];
	selects.forEach(function(type){
		_this.append('<select class="'+type+'" name="'+type+'"></select>');
	});

	var options = opt.data || [];
	var first_select = $(this).find('select:first');
	first_select.data('options', options).append('<option>-选择-</option>').nextAll('select').empty().hide();;
	options.forEach(function(poi){
		first_select.append('<option value="'+poi.name+'">'+poi.name+'</option>');
	});

	$(this).find('select').change(function(){

		$(this).nextAll('select').empty().hide();
		var selected = $(this).find('option:selected');
		var options = $(this).data('options') || [];
		
		var target = options.filter(function(item){
			return item.name === selected.text();
		})[0];

		var child = (target && target.child) ? target.child : [];

		if (child && child.length) {
			var next_select = $(this).next('select');
			next_select.data('options', child).empty().show().append('<option>-选择-</option>');
			child.forEach(function(item){
				next_select.append('<option value="'+item.name+'">'+item.name+'</option>');
			});
		}
		else {
			$(this).nextAll('select').hide();
		}
	});
})