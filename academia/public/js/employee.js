// Hide field emp

frappe.ui.form.on("Employee", {
	refresh(frm) {
		// frm.toggle_display(['employment_details', 'contact_details'], frappe.session.user !== frm.doc.user_id);
		if (frappe.session.user !== frm.doc.user_id) {
			frappe.set_route("List", "Employee");
		}
	},
});