frappe.query_reports["Stock Valuation"] = {
	"filters": [
		{
			"fieldname":"pl",
			"label": "Price List",
			"fieldtype": "Link",
			"options": "Price List",
			"reqd": 1,
			"get_query": function(){ return {'filters': [['Price List', 'enabled','=', 1]]}}
		},
		{
			"fieldname":"date",
			"label": "Valuation Date",
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"warehouse",
			"label": "Warehouse",
			"fieldtype": "Link",
			"options": "Warehouse",
		},
		{
			"fieldname":"rm",
			"label": "Is RM",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_rm_query"}}
		},
		{
			"fieldname":"bm",
			"label": "Base Material",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 0,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_bm_query"}}
		},
		{
			"fieldname":"brand",
			"label": "Brand",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 0,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_brand_query"}}
		},
		{
			"fieldname":"tt",
			"label": "Tool Type",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 0,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_tt_query"}}
		},
		{
			"fieldname":"spl",
			"label": "Special Treatment",
			"fieldtype": "Link",
			"options": "Item Attribute Value",
			"reqd": 0,
			"get_query": function(){ return {query: "rigpl_erpnext.rigpl_erpnext.item.attribute_spl_query"}}
		},
		{
			"fieldname":"item",
			"label": "Item Code",
			"fieldtype": "Link",
			"options": "Item",
			"get_query": function(){ return {'filters': [['Item', 'has_variants','=', 0]]}}
		},
		{
			"fieldname":"template",
			"label": "Variant Of",
			"fieldtype": "Link",
			"options": "Item",
			"get_query": function(){ return {'filters': [['Item', 'has_variants','=', 1]]}}
		}
	]
}