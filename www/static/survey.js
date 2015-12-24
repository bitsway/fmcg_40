


var mobile_off_flag=0;


function reload_function() {
	location.reload();
}
//-------GET GEO LOCATION
function getLocationInfo() { //location
	$("#wait_image_visit_submit").show()
	$("#visit_submit").hide();
	$("#btn_location").hide();
	
	$("#checkLocation").html(''); 
	$("#checkLocationProfileUpdate").html('');
	
	
	$("#wait_image_visit_submit_doc").show()
	$("#visit_submit_doc").hide();
	$("#btn_location_doc").hide();
	
	$("#checkLocation_doc").html('');
	
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocationshom

function onSuccess(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	$("#lat_p").val(position.coords.latitude);
	$("#long_p").val(position.coords.longitude);
	
	$("#errorChkVSubmit").html('');
	$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	
	
	$("#checkLocation").html('Location Confirmed'); 
	$("#checkLocationProfileUpdate").html('Location Confirmed');
	
		
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#btn_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#btn_location_doc").hide();
	
	
} function onError(error) {
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	
	$("#checkLocation").html('Location not found');
	$("#checkLocationProfileUpdate").html('Location not found');
	
	
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#btn_location").show();
	
	$("#checkLocation_doc").html('Location not found');
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").hide();
	$("#btn_location_doc").show();
	}


//set confirm page

function set_confirm_page(){
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#btn_location").show();
	
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	$("#checkLocation").html('');
	
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").hide();
	$("#btn_location_doc").show();
	$("#checkLocation_doc").html('');
	
	
}


// -------------- If Not synced, Show login
function first_page(){
	//alert (localStorage.page_flag)
	//alert (localStorage.synced)
	if ((localStorage.synced!='YES')){
		var url = "#login";
		$.mobile.navigate(url);		
	}
	else if ((localStorage.synced=='YES') && (localStorage.page_flag==1) && (localStorage.set_flag_api=='REQUISITION')){
		//alert (localStorage.page_flag)
		var url = "#page_order";
		$.mobile.navigate(url);	
	}
	else{
		var url = "#pageHome";
		$.mobile.navigate(url);		
	}
}

// -------------- visit page show if mobile off 
function cancelVisitPage(){
	localStorage.visit_page=""
	mobile_off_flag=0;
	
	localStorage.visitMarketStr=""
	localStorage.visit_distributor_nameid=""
	localStorage.visit_type=""
	localStorage.scheduled_date="" 
	localStorage.visit_client=""
	
	localStorage.productListStr='';
	localStorage.product_tbl_cart='';
	cancel_cart();
	
	
	//$("#btn_visit_submit").hide();
	
	
//	============Doctor=========
	localStorage.campaign_show_1="";
	localStorage.gift_show_1="";
	localStorage.ppm_show_1=""
	localStorage.sample_show_1="";
	
	
	
	localStorage.productGiftStr='';
	localStorage.campaign_doc_str=''
	localStorage.productSampleStr=''
	localStorage.productppmStr='';

	$(".visit_client").html('');
	
	
	set_doc_all();
	
	
	var url = "#pageHome";
	$.mobile.navigate(url);

	
}

//================= Clear authorization
function clear_autho(){	
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	
		localStorage.synced=''
		
		localStorage.client_string=''	
		localStorage.visit_client=''
		localStorage.client_string=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		
		localStorage.visit_page=""
		
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		
		localStorage.productppmStr='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		localStorage.productOrder_change=''
		
		

		
		
		localStorage.saved_data_submit = 0;
		localStorage.visit_save = '';
		localStorage.saved_data_show = '';
		
		localStorage.payment_mode_get='';
		
		var url = "#login";
		$.mobile.navigate(url);	
		location.reload();
	};
}

function get_login() {
	var url = "#login";
	$.mobile.navigate(url);
	}

							
//========================= Longin: Check user
function check_user() {
	
	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	

	
	//Main

	var  apipath_base_photo_dm='http://eapps001.cloudapp.net/mrep_olympic/syncmobile_order_to_delivery_withpayment/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/mrep_olympic/syncmobile_order_to_delivery_withpayment/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	

 // var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_live_20150502/get_path?CID='+cid +'&HTTPPASS=e99business321cba'
	
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	var base_url='';
	var photo_url='';
	
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		

		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	

		
		localStorage.client_string=''	
		localStorage.visit_client=''
		
		localStorage.visit_type=''
		localStorage.scheduled_date=''
		localStorage.visitMarketStr=''
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr=''
		localStorage.clientProfileStr=''
		
			
		localStorage.product_tbl_str=''
		
		localStorage.product_tbl_del_str=''
		
		localStorage.distributor_name=''
		localStorage.delivery_date=''
		localStorage.dis_client_string=''
		
		localStorage.plan_market=''
		localStorage.plan_date=''
		
		localStorage.m_plan_client_string=''
		localStorage.plan_ret_name=''
		
		localStorage.marketInfoStr=''
		localStorage.marketInfoSubmitStr=''
		localStorage.productOrderStr=''
		localStorage.marchandizingInfoStr=''
		
		localStorage.visit_plan_marketlist_combo=''
		localStorage.visit_plan_client_cmb_list=''
		localStorage.delivery_distributor_cmb_list=''
		localStorage.delivery_retailer_cmb_list=''
		localStorage.market_cmb_list_cp=''
		localStorage.unschedule_market_cmb_id=''
		
		localStorage.profile_m_client_org_id=''
		
		//----------
		localStorage.campaign_string=''	
		localStorage.visit_camp_list_str=''
		localStorage.visit_camp_submit_str=''
		//------
		localStorage.brand_list_string=''
		localStorage.visit_page=""
		localStorage.region_string=""
		localStorage.payment_mode=""
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		localStorage.productppmtStr='';
		
		
		localStorage.market_client=''
		
		
		localStorage.menu='';
													
		localStorage.ppm_string='';
		
		localStorage.user_type='';
		localStorage.market_doctor='';
		localStorage.report_button='';
		localStorage.doctorreport_button='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		
		
		
		localStorage.visit_save=''; //Saved visit data
		localStorage.save_visit_limit=0;
		localStorage.saved_data_submit = 0;
		
		
		localStorage.delivery_date='';
		localStorage.payment_date='';
		localStorage.payment_mode='';
		
		localStorage.payment_mode_get='';
		
		localStorage.visit_location_flag='';
													
		localStorage.delivery_date_flag='';
		localStorage.payment_date_flag='';
		localStorage.payment_mode_flag='';
		
		
		localStorage.doctor_report_button='';
		
		localStorage.page_flag=0;
		
	//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		var url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#wait_image_login").show();
		
		//----
		$.ajax({
			 type: 'POST',
			 url: apipath_base_photo_dm,
			 success: function(result) {	
			 		
				if (result==''){
					$("#wait_image_login").hide();
					$("#loginButton").show();
					$("#error_login").html('Base URL not available');						
				}else{
					var startIndex=result.indexOf('<start>')
					var endIndex=result.indexOf('<end>')
					
					var urlResult=result.substring(startIndex+7,endIndex);
					
					var resultArray = urlResult.split('<fd>');		
					if(resultArray.length==3){
						base_url=resultArray[0]
						photo_url=resultArray[1]
						photo_submit_url=resultArray[2]
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#error_login").html('Base URL not available');	
						}else{
							//--------------------------
							clear_autho();
							$("#error_login").html("");		
							$("#loginButton").hide();
							$("#wait_image_login").show();
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							
						//	$("#error_login").html(localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
							//http://127.0.0.1:8000/lscmreporting/syncmobile/check_user?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=
							
							$.ajax({
									 type: 'POST',
									 url: localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
									 success: function(result) {
											
											if (result==''){
												$("#wait_image_login").hide();
												$("#loginButton").show();
												$("#error_login").html('Sorry Network not available');
												
											}else{							
												var resultArray = result.split('<SYNCDATA>');			
												if (resultArray[0]=='FAILED'){
													$("#wait_image_login").hide();
													$("#loginButton").show();								
													$("#error_login").html(resultArray[1]);
													
												}else if (resultArray[0]=='SUCCESS'){
													
													localStorage.synccode=resultArray[1];
													localStorage.marketListStr=resultArray[2];
													//alert (resultArray[2]);
													localStorage.productListStr=resultArray[3];
													localStorage.marchandizingItem=resultArray[4];
													localStorage.distributorListStr=resultArray[5];								
													localStorage.brand_list_string=resultArray[6];
													
													localStorage.complain_type_string=resultArray[7];
													localStorage.complain_from_string=resultArray[8];
													localStorage.task_type_string=resultArray[9];
													region_string=resultArray[10];
													localStorage.gift_string=resultArray[11];
													localStorage.clientCat_string=resultArray[12];
													
													localStorage.market_client=resultArray[13];
													
													localStorage.menu=resultArray[14];
													
													localStorage.ppm_string=resultArray[15];
													
													localStorage.user_type=resultArray[16];
													
													localStorage.market_doctor=resultArray[17];
													
													localStorage.save_visit_limit=resultArray[18];
													
													localStorage.visit_location_flag=resultArray[19];
													
													localStorage.delivery_date_flag=resultArray[20];
													localStorage.payment_date_flag=resultArray[21];
													localStorage.payment_mode_flag=resultArray[22];
													localStorage.depotstr=resultArray[23];
													

												
												//	==============Set menu start================\
												//alert (localStorage.menu)
												var menuList=localStorage.menu.split('<rd>');
												var menuLength=menuList.length;
												var menu_str=''
												var order_report="No"
												var doctor_report="No"
												for (var j=0; j < menuLength; j++){
													var single_menu_list = menuList[j].split('<fd>');
													var s_key=single_menu_list[0]
													var s_value=single_menu_list[1]
													if (s_value=='YES'){
															 //alert (s_key);	
															 menu_str=menu_str+'<a id="sub_button" data-role="button" style="height:100px;" onClick="'+s_key+'()" ><img style="padding-top:0px; padding-bottom:0px;" src="'+s_key+'.png"></a>'

														if (s_key=="chemist_visit"){
															 order_report="Yes"
															
														}
														if (s_key=="doctor_visit"){
															 doctor_report="Yes"
															
														}
														
														
													}
													
												}
												
												localStorage.menu_list=menu_str;
												
												$('#menu_show').empty();
												//$("#menu_tbl").html(localStorage.menu_list);
												$('#menu_show').append(localStorage.menu_list).trigger('create');
												//alert (localStorage.menu_list);
												//=============set menu end================
													
													
													
													var productList=localStorage.productListStr.split('<rd>');
													var productLength=productList.length;
													
													//------------ Order Item list								
													
													if (order_report=="Yes"){
														
//localStorage.report_button='<a data-role="button" onClick="s_order_summary_report();">Sales Call and Order Count</a><a data-role="button" onClick="s_order_detail_report();" >Sales Call and Order Detail</a>'
localStorage.report_button='<a data-role="button" onClick="s_order_detail_report();" >Sales Call and Order Report</a>'
														}
														$('#order_report_button').empty();
														$('#order_report_button').append(localStorage.report_button).trigger('create');
														
															 
															
														
												 
															
														
													
													
													
													
												
													
													
													var product_tbl_order='<ul id="item_combo_id_lv" data-role="listview" data-filter="true" data-input="#item_combo_id" data-inset="true" >'
													
													for (var j=0; j < productLength; j++){
														var productArray2 = productList[j].split('<fd>');
														var product_id2=productArray2[0];	
														var product_name2=productArray2[1];
														var product_price=productArray2[2];
														
														var product_qty='';																		

														product_tbl_order=product_tbl_order+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="orderProduct" maxlength="4" onBlur="getOrderData_keyup(\''+product_id2+'\')" type="number" id="order_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="order_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="order_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="order_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>'
														//------------ Doctor Campaign Item list
														
														
														
															
													
														
														
													
													}
													product_tbl_order=product_tbl_order+'</ul>';//</table>';	
													
													
													localStorage.product_tbl_str=product_tbl_order											
													
													
													
													$("#product_list_tbl").html(localStorage.product_tbl_str);
												
													
													
													//------------ Gift Item list								
	
													
													
													
													//==========Combo for report Start
													market_list_combo();
													item_list_combo();
													mpo_list_combo()
													//==========Combo for report End
													
													//--------- Delivery Item List								
													var product_tbl_delevery='<table border="0" id="delevery_tbl" cellpadding="0" cellspacing="0" style="background-color:#F7F7F7; border-radius:5px;">';
													for (var i=0; i < productLength; i++){
														var productArray = productList[i].split('<fd>');
														var product_id=productArray[0];	
														var product_name=productArray[1];
														
														
														product_tbl_delevery+='<tr  style="border-bottom:1px solid #D2EEE9;"><td width="40%" style="text-align:center; padding-left:5px;"><input type="number" id="delivery_qty'+product_id+'" value="" placeholder="0" ><input type="hidden" id="order_id'+product_id+'" value="'+product_id+'" ><input type="hidden" id="delivery_id'+product_id+'" value="'+product_id+'" placeholder="qty" ><input type="hidden" id="delivery_name'+product_id+'" value="'+product_name+'" placeholder="qty" ></td><td width="60%" style="text-align:left;">&nbsp;&nbsp;'+product_name+'</td></tr>';
													}
													product_tbl_delevery+='</table>';								
													localStorage.product_tbl_del_str=product_tbl_delevery
													
													//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													var planMarketList = localStorage.marketListStr.split('<rd>');
													var planMarketListShowLength=planMarketList.length	
													
													var visitPlanMarketComb=''								
													var profileMarketComb='';								
													var unscheduleMarketComb='';
													
													for (var k=0; k < planMarketListShowLength; k++){
														var planMarketValueArray = planMarketList[k].split('<fd>');
														planMarketID=planMarketValueArray[0];
														planMarketName=planMarketValueArray[1];
														marketID=planMarketID
														marketName=planMarketName
														var marketNameID=planMarketName+'|'+planMarketID;
														//alert (marketNameID);
														if(planMarketID!=''){
															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															visitPlanMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="visitPlanMarketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															profileMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextCProfileLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															

															}
													}
																				
													localStorage.visit_plan_marketlist_combo=visitPlanMarketComb;								
													localStorage.unschedule_market_cmb_id=unscheduleMarketComb
													localStorage.market_cmb_list_cp=profileMarketComb;
													
												//	=================Set depot list======================
												
												var depotList=localStorage.depotstr.split('<rd>');
												
												var depotComb=''
												//alert (depotList.length);
												for (var d=0; d < depotList.length ; d++){
														var depotArray = depotList[d].split('<fd>');
														depotID=depotArray[0];
														depotName=depotArray[1];
														marketID=planMarketID
														
														var depotNameID=depotName+'|'+depotID;
														//alert (marketNameID);
														
														depotComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="depotNext(\''+depotNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+depotNameID+'</a></li>';

													}
																				
													localStorage.dis_combo=depotComb;	
													//alert (localStorage.dis_combo);
													client_catList();	

													//---------------
													$("#error_login").html('');
													$("#wait_image_login").hide();
													$("#loginButton").show();
													
													//----------------
													localStorage.visit_page=""
													
													
													$("#se_mpo").val(localStorage.user_id);
													//alert (localStorage.user_id); 
													
													//alert (localStorage.ppm_show_1);
																		
													localStorage.synced='YES';
													var url = "#pageHome";
													$.mobile.navigate(url);								
													//location.reload();
													
													set_doc_all();
													
												}else{
													$("#wait_image_login").hide();
													$("#loginButton").show();
													$("#error_login").html('Network Timeout. Please try again.');							
													}
											}
										  },
									  error: function(result) {					 
										  $("#wait_image_login").hide();
										  $("#loginButton").show();
										  $("#error_login").html('Network Timeout. Please try again.');
										
										  
										  var url = "#login";
										  $.mobile.navigate(url);	
									  }
								  });//end ajax
								}//base url check
						//alert ('nadira');
						//-------------		
					}else{
						$("#wait_image_login").hide();
						$("#loginButton").show();
						$("#error_login").html('Login Failed. Please Check CID, UserID, Password.');	
					}
					
				}
			  },
			  error: function(result) {			  	   
				 // alert ('nadira');
				  $("#wait_image_login").hide();
				  $("#loginButton").show();
				  $("#error_login").html('Network  Timeout. Please Check Internet Connection');	
				
			  }
		});//end ajax
		
		//alert(base_url+','+photo_url+'2');
		
		
		  }//end else	
	}//function

function getOtherOutlet(){	
	if (mobile_off_flag==1){
		mobile_off_flag=0;
		
		var url = "#pageHome";
		$.mobile.navigate(url);
		
	}else{
		var visit_type=localStorage.visit_type;
		//alert(visit_type);
		if (visit_type=="Scheduled"){
			var url = "#page_scheduled";
			$.mobile.navigate(url);
			
		}else if(visit_type=="Unscheduled"){
			var url = "#page_market_ret";
			$.mobile.navigate(url);
		};
	};
}


//------------------------------add depot list
function addDepotList() {
	$("#dis_combo_id").val('');
	var dis_combo_list=localStorage.dis_combo;
	//alert (dis_combo_list)
	
	//---
	var dis_combo_ob=$('#dis_combo_id_lv');
	dis_combo_ob.empty()
	dis_combo_ob.append(dis_combo_list);
	
	//-------	
	var url = "#page_rec_depot";
	$.mobile.navigate(url);
	dis_combo_ob.listview("refresh");
}

//------------------------------Unsheduled visit: market
function addMarketList() {
	$("#unschedule_market_combo_id").val('');
	var unschedule_market_combo_list=localStorage.unschedule_market_cmb_id;
	//---
	var unschedule_market_combo_ob=$('#unschedule_market_combo_id_lv');
	unschedule_market_combo_ob.empty()
	unschedule_market_combo_ob.append(unschedule_market_combo_list);
	
	//-------	
	var url = "#page_market";
	$.mobile.navigate(url);
	unschedule_market_combo_ob.listview("refresh");
}

//--------------------------------- Unsheduled visit: Client list by market id

function marketNextLV(lvalue) {
	
	$("#unschedule_market_combo_id").val(lvalue);
	if (localStorage.doctor_flag==1){
		marketNext_doc();
	}
	else{
		if (localStorage.user_type=='rep'){
			marketNext();	
		}
		else{
			
			marketNext_sup();	
		}
	}	
}

function marketNext() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			var catType=$("#catCombo").val();
			
			//===========================Get market client list Start============================
			market_list=localStorage.market_client;
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next").text("Sorry Network not available");	
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
			}else{					
					var resultArray_0 = market_list.split('<'+market_Id+'>');	
					var resultArray_1 = resultArray_0[1].split('</'+market_Id+'>');	
					var m_client_string = resultArray_1[0];	
					//var resultArray = market_list.split('</'+market_Id+'>');			
//					m_client_string=resultArray[0].replace('<'+market_Id+'>','');
														
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next").text("Retailer not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
						//----------------
						
						var visit_type="Unscheduled";
						var scheduled_date="";
						
						//-----------------------------------
									
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
							
							if(mClientID!=''){
								if (catType!=''){
									if (catType==mClientCat){
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
										
										
										
									}
	
								}
								else{
									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									

								}	
							}
						 }
					
					
					//var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
		
					
					var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
					
					
					
					unscheduled_m_client_combo_ob.empty()
					unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
													
					$(".market").html(market_name);								
					$(".visit_type").html(visit_type);								
					$(".s_date").html(scheduled_date);
					
					localStorage.visit_type=visit_type
					localStorage.scheduled_date=scheduled_date
					
					//-----------------------------------
					$("#err_market_next").text("");
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
					
					//------- 
					
					
					
					
					var url = "#page_market_ret";	
					$.mobile.navigate(url);
					unscheduled_m_client_combo_ob.listview("refresh");
				}
			}//end else
			//============================Get market client list end===============================
		}			
}




function marketNext_sup() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
	}
	else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
				
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			var catType=$("#catCombo").val();
				
				
				//===========================Get market client list Start============================
				
				
				//$("#err_market_next").html(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType);
				//http://127.0.0.1:8000/lscmreporting/syncmobile/getClientInfo?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=2568&client_id=R100008
				
	//			//// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType,
					 success: function(result) {
							
							//alert(result);
							if (result==''){
								$("#err_retailer_next").html('Sorry Network not available');
								$("#btn_schedule_ret").show();
								$("#wait_image_schedule_ret").hide();
				
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#err_market_next").text("Retailer not available");	
									$("#wait_image_unschedule_market").hide();		
									$("#btn_unschedule_market").show();
								}
								else if (resultArray[0]=='SUCCESS'){
									
									localStorage.market_client=resultArray[1];
									
									//alert (resultArray[1])
									
								var	m_client_string=localStorage.market_client;
				
									var visit_type="Unscheduled";
									var scheduled_date="";
											
						//					-----------------------------------
														
								var mClientList = m_client_string.split('<rd>');
								var mClientListShowLength=mClientList.length	
									
								var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
								var unscheduled_m_client_list=''
								//alert (mClientListShowLength);
								for (var i=0; i < mClientListShowLength; i++){
										var mClientValueArray = mClientList[i].split('<fd>');
										var mClientID=mClientValueArray[0];
										var mClientName=mClientValueArray[1];
										var mClientCat=mClientValueArray[2];
											
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}
								
								var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');

							
								var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
								
								unscheduled_m_client_combo_ob.empty()
								unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
//								--------------------------


								$(".market").html(market_name);								
								$(".visit_type").html(visit_type);								
								$(".s_date").html(scheduled_date);
								
								localStorage.visit_type=visit_type
								localStorage.scheduled_date=scheduled_date
								
								//-----------------------------------
								$("#err_market_next").text("");
								$("#wait_image_unschedule_market").hide();		
								$("#btn_unschedule_market").show();
								
								//------- 
								
								var url = "#page_market_ret";	
								$.mobile.navigate(url);
								
								unscheduled_m_client_combo_ob.listview("refresh");									
								} //else if
								
								
							} //else
							
	
						  },
					  error: function(result) {			  
						 $("#err_retailer_next").html('Sorry Network not available');
						 $("#btn_schedule_ret").show();
						 $("#wait_image_schedule_ret").hide();
					  }
				 });//end ajax
			
			

					

//			//============================Get market client list end===============================

		}	//Market required else		
}

//--------------------------------- Unsheduled visit: retailer next
function marketRetailerNextLV(lvalue) {
	$("#unscheduled_m_client_combo_id").val(lvalue);
	//alert(lvalue);
	if(localStorage.doctor_flag==1){
		marketRetailerNext_doc();	
	}
	else{
		marketRetailerNext();	
	}
		
	}

function marketRetailerNext() {
	$("#err_m_retailer_next").text("");
	visit_client=$("#unscheduled_m_client_combo_id").val();		

	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
		}else{
			//$("#btn_unschedule_market_ret").hide();
//			$("#wait_image_unschedule_market_ret").show();		
			visitClientId_list=visit_client.split('|')
			var visitClientId=visit_client.replace(visitClientId_list[0]+"|","");
			
			var visitClientID=visit_client.split('|')[1];
			
			//alert(localStorage.visit_client); 
			//alert(visitClientID); 
			if (localStorage.visit_client !=visitClientID ){
				cancel_cart();

			}
			
			$(".visit_client").html(visit_client);
				
			localStorage.visit_client_show=visit_client
			localStorage.visit_client=visit_client.split('|')[1]
			
			localStorage.visit_page="YES"
			//--------
			$("#err_m_retailer_next").text("");
			$("#wait_image_unschedule_market_ret").hide();		
			$("#btn_unschedule_market_ret").show();
			
			
			
			
			
			
			
			if (localStorage.visit_location_flag!='YES'){
				//alert (localStorage.visit_location);
				$("#visit_location").hide();
				$("#visit_submit").show();
				
			}
			if (localStorage.delivery_date_flag!='YES'){
				$("#delivery_date_div").hide();
			}
			if (localStorage.payment_date_flag!='YES'){
				$("#payment_date_div").hide();
			}
			if (localStorage.payment_mode_flag!='YES'){
				$("#payment_mode_div").hide();
			}
			
			
			$("#checkLocation").html('');
			
			var url = "#page_visit";
			$.mobile.navigate(url);
								
			
		}
}





//--------------------------------- Order: Show order from home

function getOrder_load(){	
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
	for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];		
			$("#order_qty"+orderProductId).val(orderProductQty);
		}		
	}
	
}
function getOrder(){	
	$("#errorChkVSubmit").html('');
	var url = "#page_order";	
	$.mobile.navigate(url);	

}

function set_flag_order(){	
	localStorage.set_flag_api='ORDER'
}
function set_flag_delivery(){	
	localStorage.set_flag_api='DELIVERY'
}
function set_flag_requisition(){	
	localStorage.set_flag_api='REQUISITION'
}

//--------------------------------- Order: Set Order data

function getOrderData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#order_qty"+product_id).val().replace('.','').substring(0,4);
	$("#order_qty"+product_id).val(pqty);
	
	
	var productOrderStr=localStorage.productOrderStr
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			//alert (productOrderStr)
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
					if (orderProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					}
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productOrderStr=productOrderStr
	}
		
	//	------------------------------------------------------
	

		
	}
function getOrderData(){	
	//alert (localStorage.productOrderStr);
	if (localStorage.productOrderStr!=''){
		cart_data();
		var url = "#page_cart";	
		$.mobile.navigate(url);	
	}
	else if ((localStorage.set_flag_api=='REQUISITION') && (localStorage.productOrderStr=='')){
		//cart_data();
		var url = "#page_order";	
		$.mobile.navigate(url);	
	}
	else{
		var url = "#page_visit";	
		$.mobile.navigate(url);
	}
	
	
	
	
		
	}



//-----VISIT SUBMIT
function visitSubmit(){	
	if (localStorage.doctor_flag==1){
		visitSubmit_doc();
	}
	else{
		if (localStorage.set_flag_api=='ORDER'){
			lscVisitSubmit();	
		}
		if (localStorage.set_flag_api=='DELIVERY'){
			lscVisitDelSubmit();	
		}
		if (localStorage.set_flag_api=='REQUISITION'){
			lscVisitReqSubmit();	
		}
	}	

}
function replace_special_char(string_value){
	//var chemist_feedback=$("#chemist_feedback").val();
	//var doc_feedback=$("#doc_feedback").val();
	//chemist_feedback=chemist_feedback.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	var real_value=string_value.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	return real_value;
}
function depotNext(idName){	
	//alert ('aaaaaaaaa')
	localStorage.page_flag=0
	var depotName=idName.split('|')[0];
	var depotID=idName.split('|')[1];
	//alert (localStorage.depotID)
	//alert (depotID)
	if (localStorage.depotID!=''){
		if (localStorage.depotID != depotID){
			cancel_cart()
			
			localStorage.page_flag=1;
			location.reload();
			
		}
	}

	
	
	localStorage.depotName=depotName
	localStorage.depotID=depotID
	
	
	//==============set distribute
	$("#market_show").html('');
	$("#client_show").html(localStorage.depotName+'|'+localStorage.depotID);
	
	$("#client_cart").html('');
	$("#visit_client_cart").html(localStorage.depotName+'|'+localStorage.depotID);
	
	$("#market_order_show").html('');
	$("#visit_client_order_show").html(localStorage.depotName+'|'+localStorage.depotID);

	///==============================	
	
	
	if (localStorage.visit_location_flag!='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").hide();
		$("#visit_submit").show();
		
	}
	if (localStorage.delivery_date_flag!='YES'){
		$("#delivery_date_div").hide();
	}
	if (localStorage.payment_date_flag!='YES'){
		$("#payment_date_div").hide();
	}
	if (localStorage.payment_mode_flag!='YES'){
		$("#payment_mode_div").hide();
	}
	//alert (localStorage.depotID)
	//alert (depotID)
	
	getOrder();
	

	

}
//------------------------------Requisition--------------------
function lscVisitReqSubmit(){	
	$("#errorChkVSubmit").text("");
	
	depotID=localStorage.depotID
	productOrderStr=localStorage.productOrderStr
	//------------------------
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback
	chemist_feedback=replace_special_char(chemist_feedback);

	var visit_location_error_flag=0;

//Rquisition Payment======================
	var current_balance=$("#current_balance").val()
	if (current_balance=='' ){	current_balance=0}
	
	var adj_type_1=$("#adj_type_1").val()
	var adj_date_1=$("#adj_date_1").val()
	var adj_amount_1=$("#adj_amount_1").val()
	var note_1=$("#note_1").val()
	if (adj_amount_1=='' ){	adj_amount_1=0}
	
	var adj_type_2=$("#adj_type_2").val()
	var adj_date_2=$("#adj_date_2").val()
	var adj_amount_2=$("#adj_amount_2").val()
	var note_2=$("#note_2").val()
	if (adj_amount_2=='' ){	adj_amount_2=0	}
	
	var adj_type_3=$("#adj_type_3").val()
	var adj_date_3=$("#adj_date_3").val()
	var adj_amount_3=$("#adj_amount_3").val()
	var note_3=$("#note_3").val()
	if (adj_amount_3=='' ){	adj_amount_3=0	}
	
	var adj_type_4=$("#adj_type_4").val()
	var adj_date_4=$("#adj_date_4").val()
	var adj_amount_4=$("#adj_amount_4").val()
	var note_4=$("#note_4").val()
	if (adj_amount_4=='' ){	adj_amount_4=0 }
	
	var adj_type_5=$("#adj_type_5").val()
	var adj_date_5=$("#adj_date_5").val()
	var adj_amount_5=$("#adj_amount_5").val()
	var note_5=$("#note_5").val()
	if (adj_amount_5=='' ){	adj_amount_5=0}
	
	
	var pay_bank_1=$("#pay_bank_1").val()
	var pay_branch_1=$("#pay_branch_1").val()
	var pay_date_1=$("#pay_date_1").val()
	var pay_amount_1=$("#pay_amount_1").val()
	if (pay_amount_1=='' ){	pay_amount_1=0}

	var pay_bank_2=$("#pay_bank_2").val()
	var pay_branch_2=$("#pay_branch_2").val()
	var pay_date_2=$("#pay_date_2").val()
	var pay_amount_2=$("#pay_amount_2").val()
	if (pay_amount_2=='' ){	pay_amount_2=0}
	
	var pay_bank_3=$("#pay_bank_3").val()
	var pay_branch_3=$("#pay_branch_3").val()
	var pay_date_3=$("#pay_date_3").val()
	var pay_amount_3=$("#pay_amount_3").val()
	if (pay_amount_3=='' ){	pay_amount_3=0}
	
	var pay_bank_4=$("#pay_bank_4").val()
	var pay_branch_4=$("#pay_branch_4").val()
	var pay_date_4=$("#pay_date_4").val()
	var pay_amount_4=$("#pay_amount_4").val()
	if (pay_amount_4=='' ){	pay_amount_4=0}
	
	var pay_bank_5=$("#pay_bank_5").val()
	var pay_branch_5=$("#pay_branch_5").val()
	var pay_date_5=$("#pay_date_5").val()
	var pay_amount_5=$("#pay_amount_5").val()
	if (pay_amount_5=='' ){	pay_amount_5=0}
	
	var payment_req=$("#payment_req").val()
	if (payment_req=='' ){	payment_req=0}
	
	var adj_amount= parseFloat(adj_amount_1)+parseFloat(adj_amount_2)+parseFloat(adj_amount_3)+ parseFloat(adj_amount_4)+parseFloat(adj_amount_5)
	var pay_amount= parseFloat(pay_amount_1)+parseFloat(pay_amount_2)+parseFloat(pay_amount_3)+parseFloat(pay_amount_4)+parseFloat(pay_amount_5)+parseFloat(payment_req)
	 
	
	var minimum_payment_amount=parseFloat(current_balance) + parseFloat(localStorage.total_value)- parseFloat(adj_amount)
	
	
	
	
	
	//========================================
	
	
	
	//alert (parseFloat(minimum_payment_amount))
	//alert (parseFloat(pay_amount))
	
	if ( minimum_payment_amount > pay_amount){
		$("#errorChkVSubmit").html('Minimum Payment should be '+ minimum_payment_amount.toFixed(2));
	}
	else{
		  if (localStorage.visit_location=='YES'){
			  $("#errorChkVSubmit").html('');
				//if (lat=='' || lat==0 || longitude=='' || longitude==0){
//					visit_location_error_flag=1;
//					$("#errorChkVSubmit").html('Location not Confirmed');	
//					$("#btn_location").show();	
//					$("#visit_submit").hide();	
//				}
			}
					
			if (productOrderStr==''){
				$("#errorChkVSubmit").html('Please select product for requisition');
			}
			else{
						if (depotID=='' || depotID==undefined){
							$("#errorChkVSubmit").html('Invalid Client');		
						}else{
							$("#visit_submit").hide();
							$("#wait_image_visit_submit").show();	
							//alert ('111');
							check_error_req ();
							//alert (localStorage.pay_req_flag)
							
							if (current_balance==''){
								$("#errorChkVSubmit").html('Please enter current balance');
								$("#wait_image_visit_submit").hide();
								$("#visit_submit").show();	
							}
							else{
								if (localStorage.pay_req_flag==1){
									$("#errorChkVSubmit").html('Please confirm amount info.');
									$("#wait_image_visit_submit").hide();
									$("#visit_submit").show();	
								}
								else{
									//$("#errorChkVSubmit_1").text(localStorage.base_url+'visitReqSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&depot_id='+depotID+'&order_info='+productOrderStr+'&lat='+lat+'&long='+longitude+'&chemist_feedback='+chemist_feedback+'&current_balance='+current_balance+'&adj_type_1='+adj_type_1+'&adj_date_1='+adj_date_1+'&adj_amount_1='+adj_amount_1+'&note_1='+note_1+'&adj_type_2='+adj_type_2+'&adj_date_2='+adj_date_2+'&adj_amount_2='+adj_amount_2+'&note_2='+note_2+'&adj_type_3='+adj_type_3+'&adj_date_3='+adj_date_3+'&adj_amount_3='+adj_amount_3+'&note_3='+note_3+'&adj_type_4='+adj_type_4+'&adj_date_4='+adj_date_4+'&adj_amount_4='+adj_amount_4+'&note_4='+note_4+'&adj_type_5='+adj_type_5+'&adj_date_5='+adj_date_5+'&adj_amount_5='+adj_amount_5+'&note_5='+note_5+'&pay_bank_1='+pay_bank_1+'&pay_branch_1='+pay_branch_1+'&pay_date_1='+pay_date_1+'&pay_amount_1='+pay_amount_1+'&pay_bank_2='+pay_bank_2+'&pay_branch_2='+pay_branch_2+'&pay_date_2='+pay_date_2+'&pay_amount_2='+pay_amount_2+'&pay_bank_3='+pay_bank_3+'&pay_branch_3='+pay_branch_3+'&pay_date_3='+pay_date_3+'&pay_amount_3='+pay_amount_3+'&pay_bank_4='+pay_bank_4+'&pay_branch_4='+pay_branch_4+'&pay_date_4='+pay_date_4+'&pay_amount_4='+pay_amount_4+'&pay_bank_5='+pay_bank_5+'&pay_branch_5='+pay_branch_5+'&pay_date_5='+pay_date_5+'&pay_amount_5='+pay_amount_5+'&payment_req='+payment_req);
									//alert ('222');
									//								//// ajax-------
		//								//alert (localStorage.payment_mode);
										$.ajax({
											 type: 'POST',
											 url: localStorage.base_url+'visitReqSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&depot_id='+depotID+'&order_info='+productOrderStr+'&lat='+lat+'&long='+longitude+'&chemist_feedback='+chemist_feedback+'&current_balance='+current_balance+'&adj_type_1='+adj_type_1+'&adj_date_1='+adj_date_1+'&adj_amount_1='+adj_amount_1+'&note_1='+note_1+'&adj_type_2='+adj_type_2+'&adj_date_2='+adj_date_2+'&adj_amount_2='+adj_amount_2+'&note_2='+note_2+'&adj_type_3='+adj_type_3+'&adj_date_3='+adj_date_3+'&adj_amount_3='+adj_amount_3+'&note_3='+note_3+'&adj_type_4='+adj_type_4+'&adj_date_4='+adj_date_4+'&adj_amount_4='+adj_amount_4+'&note_4='+note_4+'&adj_type_5='+adj_type_5+'&adj_date_5='+adj_date_5+'&adj_amount_5='+adj_amount_5+'&note_5='+note_5+'&pay_bank_1='+pay_bank_1+'&pay_branch_1='+pay_branch_1+'&pay_date_1='+pay_date_1+'&pay_amount_1='+pay_amount_1+'&pay_bank_2='+pay_bank_2+'&pay_branch_2='+pay_branch_2+'&pay_date_2='+pay_date_2+'&pay_amount_2='+pay_amount_2+'&pay_bank_3='+pay_bank_3+'&pay_branch_3='+pay_branch_3+'&pay_date_3='+pay_date_3+'&pay_amount_3='+pay_amount_3+'&pay_bank_4='+pay_bank_4+'&pay_branch_4='+pay_branch_4+'&pay_date_4='+pay_date_4+'&pay_amount_4='+pay_amount_4+'&pay_bank_5='+pay_bank_5+'&pay_branch_5='+pay_branch_5+'&pay_date_5='+pay_date_5+'&pay_amount_5='+pay_amount_5+'&payment_req='+payment_req,
											 success: function(result) {
													
													//alert(result);
													if (result==''){					
														$("#errorChkVSubmit").html('Sorry Network not available');
														$("#wait_image_visit_submit").hide();
														$("#visit_submit").show();									
													}else{					
														var resultArray = result.split('<SYNCDATA>');			
														if (resultArray[0]=='FAILED'){						
															$("#errorChkVSubmit").html(resultArray[1]);
															$("#wait_image_visit_submit").hide();
															$("#visit_submit").show();	
														}else if (resultArray[0]=='SUCCESS'){
															//alert (resultArray[0])
															//-----------
															localStorage.visit_client=''
															localStorage.marchandizingStr=''
															
															localStorage.marketInfoLSCStr=''
															
															localStorage.marketInfoStr='';
															localStorage.marketInfoSubmitStr='';
															
															localStorage.productOrderStr='';
															localStorage.marchandizingInfoStr='';
															localStorage.visit_camp_list_str='';
															localStorage.visit_camp_submit_str='';
															visitCampaginTempArray=[];
															visitCampaginArray=[];
															
															localStorage.visit_page="";
															
															localStorage.show_total="";
															
															$("#chemist_feedback").val('')
															
															
					
															//-------------
															// Clear localStorage
																
															localStorage.productOrderStr='';
															cancel_cart();
															if (localStorage.saved_data_submit==1)	{
																var visit_save=localStorage.visit_save;
																var saved_data_show=localStorage.saved_data_show;
																var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")
																localStorage.visit_save=visit_save_data;
																//alert (" replace from saved data");
															}
															
															//--------------------------------------------------------
															$(".visit_client").html('');
															
															$("#errorChkVSubmit").html('');
															$("#lat").val('');
															$("#longitude").val('');
															$("#lscPhoto").val('');
															document.getElementById('myImage').src = '';
															
															$("#lat_p").val('');
															$("#long_p").val('');								
															
															$("#checkLocation").html('');
															$("#checkLocationProfileUpdate").html('');
															
															$("#wait_image_visit_submit").hide();
															$("#visit_submit").show();
															
															$("#product_total_last").html('');
															$("#product_list_tbl_cart").html('');
															$("#product_total_cart").html('');
															$("#item_combo_id").val('Search');
															
															
															
															//--
															$("#visit_success").html('</br></br>Requisition SL: '+resultArray[1]+'</br>Submitted Successfully');
															
															
															$("#btn_location").show();	
															$("#visit_submit").hide();
															$("#checkLocation").hide('');	
															
															
															
															$("#btn_location_doc").show();
															$("#visit_submit_doc").hide();	
															$("#checkLocation_doc").html('');
															$("#wait_image_visit_submit_doc").hide('');
															localStorage.page_flag=0;
															//$("#lat").val(0);
															//$("#longitude").val(0);
															
																														
															
															var url = "#page_confirm_visit_success";
															//var url = "#page_market_ret";	
															$.mobile.navigate(url);
															
																									
														}else{						
															$("#errorChkVSubmit").html('Network Timeout. Please try again.');
															$("#wait_image_visit_submit").hide();
															$("#visit_submit").show();								
															}
													}
												  },
											  error: function(result) {			  
													$("#errorChkVSubmit").html('Network Timeout. Please try again.');
													$("#wait_image_visit_submit").hide();
													$("#visit_submit").show();	
											  }
										 });//end ajax
								}// End req error check
							}// end current balance if
						}
								
					
				
				}//product blank if end
	    } //else of payment amount
  } // End function
  //$("#errorChkVSubmit_1").text(localStorage.base_url+'visitReqSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&depot_id='+depotID+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr++'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode_get+'&chemist_feedback='+chemist_feedback+'&delivery_date='+localStorage.delivery_date+'&payment_date='+localStorage.payment_date+'&current_balance='+current_balance+'&adj_type_1='+adj_type_1+'&adj_date_1='+adj_date_1+'&adj_amount_1='+adj_amount_1+'&note_1='+note_1+'&adj_type_2='+adj_type_2)//+'&adj_date_2='+adj_date_2+'&adj_amount_2='+adj_amount_2+'&note_2='+note_2+'&adj_type_3='+adj_type_3+'&adj_date_3='+adj_date_3+'&adj_amount_3='+adj_amount_3+'&note_3='+note_3+'&adj_type_4='+adj_type_4+'&adj_date_4='+adj_date_4+'&adj_amount_4='+adj_amount_4+'&note_4='+note_4+'&adj_type_5='+adj_type_5+'&adj_date_5='+adj_date_5+'&adj_amount_5='+adj_amount_5+'&note_5='+note_5+'&pay_bank_1='+pay_bank_1+'&pay_branch_1='+pay_branch_1+'&pay_date_1='+pay_date_1+'&pay_amount_1='+pay_amount_1+'&pay_bank_2='+pay_bank_2+'&pay_branch_2='+pay_branch_2+'&pay_date_2='+pay_date_2+'&pay_amount_2='+pay_amount_2+'&pay_bank_3='+pay_bank_3+'&pay_branch_3='+pay_branch_3+'&pay_date_3='+pay_date_3+'&pay_amount_3='+pay_amount_3+'&pay_bank_4='+pay_bank_4+'&pay_branch_4='+pay_branch_4+'&pay_date_4='+pay_date_4+'&pay_amount_4='+pay_amount_4+'&pay_bank_5='+pay_bank_5+'&pay_branch_5='+pay_branch_5+'&pay_date_5='+pay_date_5+'&pay_amount_5='+pay_amount_5+'&payment_req='+payment_req);
//			

function check_error_req(){
	var current_balance=$("#current_balance").val()
	if (current_balance=='' ){	current_balance=0}
	
	var adj_type_1=$("#adj_type_1").val()
	var adj_date_1=$("#adj_date_1").val()
	var adj_amount_1=$("#adj_amount_1").val()
	var note_1=$("#note_1").val()
	if (adj_amount_1=='' ){	adj_amount_1=0}
	
	var adj_type_2=$("#adj_type_2").val()
	var adj_date_2=$("#adj_date_2").val()
	var adj_amount_2=$("#adj_amount_2").val()
	var note_2=$("#note_2").val()
	if (adj_amount_2=='' ){	adj_amount_2=0	}
	
	var adj_type_3=$("#adj_type_3").val()
	var adj_date_3=$("#adj_date_3").val()
	var adj_amount_3=$("#adj_amount_3").val()
	var note_3=$("#note_3").val()
	if (adj_amount_3=='' ){	adj_amount_3=0	}
	
	var adj_type_4=$("#adj_type_4").val()
	var adj_date_4=$("#adj_date_4").val()
	var adj_amount_4=$("#adj_amount_4").val()
	var note_4=$("#note_4").val()
	if (adj_amount_4=='' ){	adj_amount_4=0 }
	
	var adj_type_5=$("#adj_type_5").val()
	var adj_date_5=$("#adj_date_5").val()
	var adj_amount_5=$("#adj_amount_5").val()
	var note_5=$("#note_5").val()
	if (adj_amount_5=='' ){	adj_amount_5=0}
	
	
	var pay_bank_1=$("#pay_bank_1").val()
	var pay_branch_1=$("#pay_branch_1").val()
	var pay_date_1=$("#pay_date_1").val()
	var pay_amount_1=$("#pay_amount_1").val()
	if (pay_amount_1=='' ){	pay_amount_1=0}

	var pay_bank_2=$("#pay_bank_2").val()
	var pay_branch_2=$("#pay_branch_2").val()
	var pay_date_2=$("#pay_date_2").val()
	var pay_amount_2=$("#pay_amount_2").val()
	if (pay_amount_2=='' ){	pay_amount_2=0}
	
	var pay_bank_3=$("#pay_bank_3").val()
	var pay_branch_3=$("#pay_branch_3").val()
	var pay_date_3=$("#pay_date_3").val()
	var pay_amount_3=$("#pay_amount_3").val()
	if (pay_amount_3=='' ){	pay_amount_3=0}
	
	var pay_bank_4=$("#pay_bank_4").val()
	var pay_branch_4=$("#pay_branch_4").val()
	var pay_date_4=$("#pay_date_4").val()
	var pay_amount_4=$("#pay_amount_4").val()
	if (pay_amount_4=='' ){	pay_amount_4=0}
	
	var pay_bank_5=$("#pay_bank_5").val()
	var pay_branch_5=$("#pay_branch_5").val()
	var pay_date_5=$("#pay_date_5").val()
	var pay_amount_5=$("#pay_amount_5").val()
	if (pay_amount_5=='' ){	pay_amount_5=0}
	
	localStorage.pay_req_flag=0;
	if  ((adj_amount_1.length > 0) & ((adj_type_1=='') || (adj_date_1=='')) ){
		localStorage.pay_req_flag=1
	}
	if  ((adj_amount_2.length > 0) & ((adj_type_2=='') || (adj_date_2=='')) ){
		localStorage.pay_req_flag=1
	}
	if  ((adj_amount_3.length > 0) & ((adj_type_3=='') || (adj_date_3=='')) ){
		localStorage.pay_req_flag=1
	}
	if  ((adj_amount_4.length > 0) & ((adj_type_4=='') || (adj_date_4=='')) ){
		localStorage.pay_req_flag=1
	}
	if  ((adj_amount_5.length > 0) & ((adj_type_5=='') || (adj_date_5=='')) ){
		localStorage.pay_req_flag=1
	}
	
	if  ((pay_amount_1.length > 0) & ((pay_bank_1=='') || (pay_branch_1=='')  || (pay_date_1=='')) ){
		localStorage.pay_req_flag=1
	}
	if  ((pay_amount_2.length > 0) & ((pay_bank_2=='') || (pay_branch_2=='')  || (pay_date_2=='')) ){
		localStorage.pay_req_flag=1
	}
	if  ((pay_amount_3.length > 0) & ((pay_bank_3=='') || (pay_branch_3=='')  || (pay_date_3=='')) ){
		localStorage.pay_req_flag=1
	}
	if  ((pay_amount_4.length > 0) & ((pay_bank_4=='') || (pay_branch_4=='')  || (pay_date_4=='')) ){
		localStorage.pay_req_flag=1
	}
	if  ((pay_amount_5.length > 0) & ((pay_bank_5=='') || (pay_branch_5=='')  || (pay_date_5=='')) ){
		localStorage.pay_req_flag=1
	}
	// localStorage.pay_req_flag
	//alert (pay_req_flag)
	
}

//------------------------------Delivery-----------------------
function lscVisitDelSubmit(){	
	$("#errorChkVSubmit").text("");
	//alert (localStorage.visit_client);
	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//----------------------- marchandizing status check
	if (marchandizingInfoStr==undefined){
		marchandizingInfoStr=''
	}else{
		var marchandizingList=marchandizingInfoStr.split('<rd>');	
		var marchandizingItemLength=marchandizingList.length;	
		var photoRequired="No";
		for (var i=0; i < marchandizingItemLength; i++){		
			var marchandizingArray = marchandizingList[i].split('<fd>');
			var item_status=marchandizingArray[5];	
			if(item_status=='Bad'){
				photoRequired="Yes";
				break;
				}
		}
	}
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback
	chemist_feedback=replace_special_char(chemist_feedback);

	//localStorage.payment_mode_get=$("input[name=payment_mode]:checked").val()
	var payment_mode_get=$("input:radio[name='paymentMode']:checked").val();
	localStorage.payment_mode_get=payment_mode_get;
	var delivery_date=$("#delivery_date").val()
	localStorage.delivery_date=delivery_date;
	
	var payment_date=$("#payment_date").val()
	localStorage.payment_date=payment_date;
	
	
	//alert (localStorage.payment_mode_get);
	var visit_location_error_flag=0;
	
	if (localStorage.visit_location=='YES'){
		if (lat=='' || lat==0 || longitude=='' || longitude==0){
			visit_location_error_flag=1;
			$("#errorChkVSubmit").html('Location not Confirmed');	
			$("#btn_location").show();	
			$("#visit_submit").hide();	
		}
	}
			
	if (productOrderStr==''){
		$("#errorChkVSubmit").html('Please select product for delivery');
	}
	else{
		if  ((photoRequired=='Yes') && (lscPhoto=='') && (visit_location_error_flag==0)){
			$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
		}else{
			var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';	
				
				
				if (visitClientId=='' || visitClientId==undefined){
					$("#errorChkVSubmit").html('Invalid Client');		
				}else{
					if(visit_type=='' || visit_type==undefined){
						$("#errorChkVSubmit").html('Invalid Visit Type');
					}else{
						$("#visit_submit").hide();
						$("#wait_image_visit_submit").show();		
					//	alert (productOrderStr)
					//	$("#errorChkVSubmit_1").text(localStorage.base_url+'visitDelSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode_get+'&chemist_feedback='+chemist_feedback+'&delivery_date='+localStorage.delivery_date+'&payment_date='+localStorage.payment_date);
	
						
						//// ajax-------
						//alert (localStorage.payment_mode);
						$.ajax({
							 type: 'POST',
							 url: localStorage.base_url+'visitDelSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode_get+'&chemist_feedback='+chemist_feedback+'&delivery_date='+localStorage.delivery_date+'&payment_date='+localStorage.payment_date,
							 success: function(result) {
									
									//alert(result);
									if (result==''){					
										$("#errorChkVSubmit").html('Sorry Network not available');
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();									
									}else{					
										var resultArray = result.split('<SYNCDATA>');			
										if (resultArray[0]=='FAILED'){						
											$("#errorChkVSubmit").html(resultArray[1]);
											$("#wait_image_visit_submit").hide();
											$("#visit_submit").show();	
										}else if (resultArray[0]=='SUCCESS'){
											//alert (resultArray[0])
											//-----------
											localStorage.visit_client=''
											localStorage.marchandizingStr=''
											
											localStorage.marketInfoLSCStr=''
											
											localStorage.marketInfoStr='';
											localStorage.marketInfoSubmitStr='';
											
											localStorage.productOrderStr='';
											localStorage.marchandizingInfoStr='';
											localStorage.visit_camp_list_str='';
											localStorage.visit_camp_submit_str='';
											visitCampaginTempArray=[];
											visitCampaginArray=[];
											
											localStorage.visit_page="";
											
											localStorage.show_total="";
											
											$("#chemist_feedback").val('')
											
											
	
											//-------------
											// Clear localStorage
												
											localStorage.productOrderStr='';
											cancel_cart();
											if (localStorage.saved_data_submit==1)	{
												var visit_save=localStorage.visit_save;
												var saved_data_show=localStorage.saved_data_show;
												var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")
												localStorage.visit_save=visit_save_data;
												//alert (" replace from saved data");
											}
											
											//--------------------------------------------------------
											$(".visit_client").html('');
											
											$("#errorChkVSubmit").html('');
											$("#lat").val('');
											$("#longitude").val('');
											$("#lscPhoto").val('');
											document.getElementById('myImage').src = '';
											
											$("#lat_p").val('');
											$("#long_p").val('');								
											
											$("#checkLocation").html('');
											$("#checkLocationProfileUpdate").html('');
											
											$("#wait_image_visit_submit").hide();
											$("#visit_submit").show();
											
											$("#product_total_last").html('');
											$("#product_list_tbl_cart").html('');
											$("#product_total_cart").html('');
											$("#item_combo_id").val('Search');
											
											
											
											//--
											$("#visit_success").html('</br></br>Delivery SL: '+resultArray[1]+'</br>Submitted Successfully');
											
											
											$("#btn_location").show();	
											$("#visit_submit").hide();
											$("#checkLocation").hide('');	
											
											
											
											$("#btn_location_doc").show();
											$("#visit_submit_doc").hide();	
											$("#checkLocation_doc").html('');
											$("#wait_image_visit_submit_doc").hide('');
											
											
											var url = "#page_confirm_visit_success";
											//var url = "#page_market_ret";	
											$.mobile.navigate(url);
											
																					
										}else{						
											$("#errorChkVSubmit").html('Network Timeout. Please try again.');
											$("#wait_image_visit_submit").hide();
											$("#visit_submit").show();								
											}
									}
								  },
							  error: function(result) {			  
									$("#errorChkVSubmit").html('Network Timeout. Please try again.');
									$("#wait_image_visit_submit").hide();
									$("#visit_submit").show();	
							  }
						 });//end ajax	
					}
				}
			}//Photo check if
		}//product blank check if
  }




//-------------------------------Order----------------------
function lscVisitSubmit(){	
	$("#errorChkVSubmit").text("");
	//alert (localStorage.visit_client);
	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	//alert (visitClientId);
	marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//----------------------- marchandizing status check
	if (marchandizingInfoStr==undefined){
		marchandizingInfoStr=''
	}else{
		var marchandizingList=marchandizingInfoStr.split('<rd>');	
		var marchandizingItemLength=marchandizingList.length;	
		var photoRequired="No";
		for (var i=0; i < marchandizingItemLength; i++){		
			var marchandizingArray = marchandizingList[i].split('<fd>');
			var item_status=marchandizingArray[5];	
			if(item_status=='Bad'){
				photoRequired="Yes";
				break;
				}
		}
	}
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback
	chemist_feedback=replace_special_char(chemist_feedback);

	//localStorage.payment_mode_get=$("input[name=payment_mode]:checked").val()
	var payment_mode_get=$("input:radio[name='paymentMode']:checked").val();
	localStorage.payment_mode_get=payment_mode_get;
	var delivery_date=$("#delivery_date").val()
	localStorage.delivery_date=delivery_date;
	
	var payment_date=$("#payment_date").val()
	localStorage.payment_date=payment_date;
	
	
	//alert (localStorage.payment_mode_get);
	var visit_location_error_flag=0;
	
	if (localStorage.visit_location=='YES'){
		if (lat=='' || lat==0 || longitude=='' || longitude==0){
			visit_location_error_flag=1;
			$("#errorChkVSubmit").html('Location not Confirmed');	
			$("#btn_location").show();	
			$("#visit_submit").hide();	
		}
	}
			
	
	if  ((photoRequired=='Yes') && (lscPhoto=='') && (visit_location_error_flag==0)){
		$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
	}else{
		var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';	
			
			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					
				//	$("#errorChkVSubmit_1").html(localStorage.base_url+'visitSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode_get+'&chemist_feedback='+chemist_feedback+'&delivery_date='+localStorage.delivery_date+'&payment_date='+localStorage.payment_date);

					
					//// ajax-------
					//alert (localStorage.payment_mode);
					$.ajax({
						 type: 'POST',
						 url: localStorage.base_url+'visitSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode_get+'&chemist_feedback='+chemist_feedback+'&delivery_date='+localStorage.delivery_date+'&payment_date='+localStorage.payment_date,
						 success: function(result) {
								
								//alert(result);
								if (result==''){					
									$("#errorChkVSubmit").html('Sorry Network not available');
									$("#wait_image_visit_submit").hide();
									$("#visit_submit").show();									
								}else{					
									var resultArray = result.split('<SYNCDATA>');			
									if (resultArray[0]=='FAILED'){						
										$("#errorChkVSubmit").html(resultArray[1]);
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();	
									}else if (resultArray[0]=='SUCCESS'){
										//alert (resultArray[0])
										//-----------
										localStorage.visit_client=''
										localStorage.marchandizingStr=''
										
										localStorage.marketInfoLSCStr=''
										
										localStorage.marketInfoStr='';
										localStorage.marketInfoSubmitStr='';
										
										localStorage.productOrderStr='';
										localStorage.marchandizingInfoStr='';
										localStorage.visit_camp_list_str='';
										localStorage.visit_camp_submit_str='';
										visitCampaginTempArray=[];
										visitCampaginArray=[];
										
										localStorage.visit_page="";
										
										localStorage.show_total="";
										
										$("#chemist_feedback").val('')
										
										

										//-------------
										// Clear localStorage
											
										localStorage.productOrderStr='';
										cancel_cart();
										if (localStorage.saved_data_submit==1)	{
											var visit_save=localStorage.visit_save;
											var saved_data_show=localStorage.saved_data_show;
											var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>","")
											localStorage.visit_save=visit_save_data;
											//alert (" replace from saved data");
										}
										
										//--------------------------------------------------------
										$(".visit_client").html('');
										
										$("#errorChkVSubmit").html('');
										$("#lat").val('');
										$("#longitude").val('');
										$("#lscPhoto").val('');
										document.getElementById('myImage').src = '';
										
										$("#lat_p").val('');
										$("#long_p").val('');								
										
										$("#checkLocation").html('');
										$("#checkLocationProfileUpdate").html('');
										
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();
										
										$("#product_total_last").html('');
										$("#product_list_tbl_cart").html('');
										$("#product_total_cart").html('');
										$("#item_combo_id").val('Search');
										
										
										
										//--
										$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
										
										
										$("#btn_location").show();	
										$("#visit_submit").hide();
										$("#checkLocation").hide('');	
										
										
										
										$("#btn_location_doc").show();
										$("#visit_submit_doc").hide();	
										$("#checkLocation_doc").html('');
										$("#wait_image_visit_submit_doc").hide('');
										
										
										var url = "#page_confirm_visit_success";
										//var url = "#page_market_ret";	
										$.mobile.navigate(url);
										
																				
									}else{						
										$("#errorChkVSubmit").html('Network Timeout. Please try again.');
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();								
										}
								}
							  },
						  error: function(result) {			  
								$("#errorChkVSubmit").html('Network Timeout. Please try again.');
								$("#wait_image_visit_submit").hide();
								$("#visit_submit").show();	
						  }
					 });//end ajax	
				}
			}
		}//Photo check if
  }


//------------------- Client Profile: Page from home
function addMarketListCp() {
	$("#profile_market_cmb_id").val('');
	
	
	var market_cmb_list_cp=localStorage.market_cmb_list_cp;	
	var profile_market_cmb_id_oblv=$('#profile_market_cmb_id_lv');
	profile_market_cmb_id_oblv.empty();
	profile_market_cmb_id_oblv.append(market_cmb_list_cp);
	
	//-------
	var url = "#page_market_clprofile";
	$.mobile.navigate(url);
	profile_market_cmb_id_oblv.listview("refresh");
}


//--------------------------------- Client Profile: Client list by market id

function marketNextCProfileLV(lvalue) {
	$("#profile_market_cmb_id").val(lvalue);
	marketNextCProfile();
	
	}


function marketNextCProfile() {
	$("#err_market_next_cp").html('');
	
	var market_name=$("#profile_market_cmb_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next_cp").text("Market required");
		}else{
			$("#btn_profile_market").hide();
			$("#wait_image_profile_market").show();	
			
			
			//visitMarketStr
			
			
			var marketNameId=market_name.split('|');
			var market_Id=marketNameId[1];
			
			
			
			var catType=$("#catCombo_profile").val();
			//===========================Get market client list Start============================
			
			market_list=localStorage.market_client;
			//alert (marketNameId);
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next_cp").text("Sorry Network not available");	
					$("#wait_image_profile_market").hide();		
			}else{					
					var resultArray = market_list.split('</'+market_Id+'>');			
					m_client_string=resultArray[0].replace('<'+market_Id+'>','');
														
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next_cp").text("Retailer not available");	
						$("#wait_image_profile_market").hide();		
						
					}
					else{
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						var profile_m_client_combo=''
						for (var i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
							
							if(mClientID!=''){
								if (catType!=''){
									if (catType==mClientCat){
										profile_m_client_combo+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextCProfileLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}
	
								}
								else{
									profile_m_client_combo+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextCProfileLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
								}	
							}
						 }
					

								var profile_client_id_ob=$('#profile_client_id_lv');
								profile_client_id_ob.empty()
								profile_client_id_ob.append(profile_m_client_combo);
								
								$(".market").html(market_name);								
																
								//---------	
								$("#err_market_next_cp").html('');
								$("#wait_image_profile_market").hide();		
								$("#btn_profile_market").show();
								
								//-----
								var url = "#page_market_ret_cprofile";	
								$.mobile.navigate(url);
								//----
								
								profile_client_id_ob.listview("refresh");
					
				}
			}//end else
			//============================Get market client list end===============================
			
			
	
			
		}	
		
}

//--------------------------------- Client Profile: retailer next

function marketRetailerNextCProfileLV(lvalue) {
	$("#profile_client_id").val(lvalue);
	marketRetailerNextCProfile();	
	}
	
function marketRetailerNextCProfile() {
	$("#err_m_retailer_next_cp").text("");
	$("#err_profile_next_cp").html('');
	$("#errorConfirmProfileUpdate").html('');
	
	
	var profile_client=$("#profile_client_id").val();		
	
	if(profile_client=='' || profile_client==0){
			$("#err_m_retailer_next_cp").text("Retailer required");
		}else{
			$("#btn_profile_market_ret").hide();
			$("#wait_image_profile_market_ret").show();		
			
		
			localStorage.visit_client=profile_client
			
			profileClientId=localStorage.visit_client.split('|')[1]
			
			//$("#err_m_retailer_next_cp").text(localStorage.base_url+'getClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+profileClientId);
   			
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'getClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+profileClientId,
				 success: function(result) {
						
						//alert(result);
						if (result==''){					
							$("#err_m_retailer_next_cp").text('Sorry Network not available');
							$("#wait_image_profile_market_ret").hide();		
							$("#btn_profile_market_ret").show();
			
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#err_m_retailer_next_cp").html(resultArray[1]);
								$("#wait_image_profile_market_ret").hide();		
								$("#btn_profile_market_ret").show();
							
							}else if (resultArray[0]=='SUCCESS'){
													
								var visitMarketStr=resultArray[1];
								var clientCatStr=resultArray[2];								
								var clientProfileStr=resultArray[3];
								var clientProfileDistributorStr=resultArray[4];
								
								//------------------ Client Category
								var clientCatStrList=clientCatStr.split('<fd>')								
								var clientCatStrListLength=clientCatStrList.length									
								
								var cp_categoryOptions='';							
								for (var k=0; k < clientCatStrListLength; k++){
									var clientCatID = clientCatStrList[k]									
									if(clientCatID!=''){
										cp_categoryOptions+='<option value="'+clientCatID+'" >'+clientCatID+'</option>';
										}								
								}
								
								
								//--------
								$(".prof_market_class").html(visitMarketStr);
								$(".prof_distributor_class").html(clientProfileDistributorStr);		
								$(".prof_retailer_class").html(profile_client);						
												
								//----------------						
												
								
								var clientProfileList=clientProfileStr.split('<fd>')
								
								$("#cp_id").val(clientProfileList[0]);
								$("#cp_name").val(clientProfileList[1]);
								$("#cp_address").val(clientProfileList[2]);
								
								$("#cp_marketid").val(clientProfileList[3]);
								$("#cp_contact1").val(clientProfileList[4]);
								$("#cp_contact2").val(clientProfileList[5]);
								
								$("#cp_owner_name").val(clientProfileList[6]);
								$("#cp_nid").val(clientProfileList[7]);
								$("#cp_Passport").val(clientProfileList[8]);
								$("#cp_dob").val(clientProfileList[9]);
								$("#cp_dom").val(clientProfileList[10]);
								$("#cp_kidsinfo").val(clientProfileList[11]);
								$("#cp_hobby").val(clientProfileList[12]);
								var cp_trade_license=clientProfileList[13];
								
								$("#cp_trade_licence_no").val(clientProfileList[14]);
								var cp_vat_registration=clientProfileList[15];
								
								$("#cp_vat_reg_no").val(clientProfileList[16]);
								
								$("#cp_manager_name").val(clientProfileList[17]);
								$("#cp_manager_cont_no").val(clientProfileList[18]);
								$("#cp_starting_year").val(clientProfileList[19]);
								var cp_Category=clientProfileList[20];
								
								var cp_lsc_covered=clientProfileList[21];
								
								$("#cp_monthly_sales_capacity").val(clientProfileList[22]);
								$("#cp_monthly_sales").val(clientProfileList[23]);
								var cp_shop_rent_own=clientProfileList[24];
								
								$("#cp_warehouse_capacity").val(clientProfileList[25]);
								$("#cp_shop_size").val(clientProfileList[26]);
								$("#cp_shop_front_size").val(clientProfileList[27]);
								$("#cp_truck_number").val(clientProfileList[28]);
								$("#cp_barge_number").val(clientProfileList[29]);
								var cp_status=clientProfileList[30];
								var client_photo_str=clientProfileList[31];
								
								//--------------
								var client_photo_strimage = document.getElementById('clientProfileImage');
    							
								//client_photo_strimage.src = 'http://e.businesssolutionapps.com/lscmreporting/static/client_pic/'+client_photo_str;
								client_photo_strimage.src = localStorage.photo_url+'client_pic/'+client_photo_str;
								
								//$("#clientProfileImage").src = client_photo_str;
								
								//------------------------------------------
								var cp_trade_license_ob=$("#cp_trade_license");
								cp_trade_license_ob.empty();
								var cp_trade_licenseOption='<option value="" >Select</option><option value="YES" >YES</option><option value="NO" >NO</option>';
								cp_trade_license_ob.append(cp_trade_licenseOption);	
								cp_trade_license_ob.val(cp_trade_license);
								
								var cp_vat_registration_ob=$("#cp_vat_registration");
								cp_vat_registration_ob.empty();
								var cp_vat_registration_obOption='<option value="" >Select</option><option value="YES" >YES</option><option value="NO" >NO</option>';
								cp_vat_registration_ob.append(cp_vat_registration_obOption);	
								cp_vat_registration_ob.val(cp_vat_registration);
								
								var cp_Category_ob=$("#cp_Category");
								cp_Category_ob.empty();
								var cp_Category_obOption=cp_categoryOptions;
								cp_Category_ob.append(cp_Category_obOption);	
								cp_Category_ob.val(cp_Category);
								
								var cp_lsc_covered_ob=$("#cp_lsc_covered");
								cp_lsc_covered_ob.empty();
								var cp_lsc_covered_obOption='<option value="" >Select</option><option value="YES" >YES</option><option value="NO" >NO</option>';
								cp_lsc_covered_ob.append(cp_lsc_covered_obOption);	
								cp_lsc_covered_ob.val(cp_lsc_covered);
								
								var cp_shop_rent_own_ob=$("#cp_shop_rent_own");
								cp_shop_rent_own_ob.empty();
								var cp_shop_rent_own_obOption='<option value="" >Select</option><option value="Rented" >Rented</option><option value="Own" >Own</option>';
								cp_shop_rent_own_ob.append(cp_shop_rent_own_obOption);	
								cp_shop_rent_own_ob.val(cp_shop_rent_own);
								
								var cp_status_ob=$("#cp_status");
								cp_status_ob.empty();
								var cp_status_obOption='<option value="" >Select</option><option value="ACTIVE" >ACTIVE</option><option value="INACTIVE" >INACTIVE</option>';
								cp_status_ob.append(cp_status_obOption);	
								cp_status_ob.val(cp_status);						
								
								//--------------------------------
								$("#wait_image_profile_market_ret").hide();		
								$("#btn_profile_market_ret").show();								
								$("#err_m_retailer_next_cp").text("");	
															
								var url = "#profile_update";
								$.mobile.navigate(url);
								
								//-----------------------								
								cp_trade_license_ob.selectmenu("refresh");
								cp_vat_registration_ob.selectmenu("refresh");
								cp_Category_ob.selectmenu("refresh");
								cp_lsc_covered_ob.selectmenu("refresh");
								cp_shop_rent_own_ob.selectmenu("refresh");
								cp_status_ob.selectmenu("refresh");
								
								//------------------------------------------
								
								
							}else{						
								$("#err_m_retailer_next_cp").html('Network Timeout. Please try again.');	
								$("#wait_image_profile_market_ret").hide();		
								$("#btn_profile_market_ret").show();						
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_m_retailer_next_cp").html('Network Timeout. Please try again.');
					  $("#wait_image_profile_market_ret").hide();		
					  $("#btn_profile_market_ret").show();
				  }
			 });//end ajax	
			
		}
}



//--------------------------Client profile: profile button Next
var clientUpdateStr=''

function prifileInfoNext(){	
	$("#err_profile_next_cp").html('');
	$("#errorConfirmProfileUpdate").html('');
	
	$("#checkLocation").html('');
	$("#checkLocationProfileUpdate").html('');
	
	
	clientUpdateStr=''
	
	//var cp_marketnameid=$("#cp_marketnameid").val();
	
	var cp_id=$("#cp_id").val();
	var cp_name=$("#cp_name").val();
	var cp_name=$("#cp_name").val();
	cp_name=cp_name.replace('&',' and ');
	
	var cp_address=$("#cp_address").val();
	cp_address=cp_address.replace('&',' and ');
	
	var cp_marketid=$("#cp_marketid").val();
	var cp_contact1=$("#cp_contact1").val();
	var cp_contact2=$("#cp_contact2").val();
	
	var cp_owner_name=$("#cp_owner_name").val();
	var cp_nid=$("#cp_nid").val();
	var cp_Passport=$("#cp_Passport").val();
	var cp_dob=$("#cp_dob").val();
	var cp_dom=$("#cp_dom").val();
	var cp_kidsinfo=$("#cp_kidsinfo").val();
	var cp_hobby=$("#cp_hobby").val();
	var cp_trade_license=$("#cp_trade_license").val();
	var cp_trade_licence_no=$("#cp_trade_licence_no").val();
	var cp_vat_registration=$("#cp_vat_registration").val();
	var cp_vat_reg_no=$("#cp_vat_reg_no").val();
	
	var cp_manager_name=$("#cp_manager_name").val();
	var cp_manager_cont_no=$("#cp_manager_cont_no").val();
	var cp_starting_year=$("#cp_starting_year").val();
	var cp_Category=$("#cp_Category").val();
	var cp_lsc_covered=$("#cp_lsc_covered").val();
	var cp_monthly_sales_capacity=$("#cp_monthly_sales_capacity").val();
	var cp_monthly_sales=$("#cp_monthly_sales").val();
	var cp_shop_rent_own=$("#cp_shop_rent_own").val();
	var cp_warehouse_capacity=$("#cp_warehouse_capacity").val();
	var cp_shop_size=$("#cp_shop_size").val();
	var cp_shop_front_size=$("#cp_shop_front_size").val();
	var cp_truck_number=$("#cp_truck_number").val();
	var cp_barge_number=$("#cp_barge_number").val();
	var cp_status=$("#cp_status").val();
	
	//if(cp_id=='' || cp_name=='' || cp_marketid==''|| cp_contact1=='' || cp_owner_name=='' || cp_trade_license=='' || cp_vat_registration=='' || cp_Category=='' || cp_lsc_covered=='' || cp_shop_rent_own=='' || cp_status==''){
	if(cp_id=='' || cp_name=='' || cp_marketid==''|| cp_contact1=='' || cp_owner_name=='' || cp_shop_rent_own=='' ){
		$("#err_profile_next_cp").html('Important Value Required');
		
	}else{

		clientUpdateStr=cp_id+'<fd>'+cp_name+'<fd>'+cp_address+'<fd>'+cp_marketid+'<fd>'+cp_contact1+'<fd>'+cp_contact2+'<fd>'+
		cp_owner_name+'<fd>'+cp_nid+'<fd>'+cp_Passport+'<fd>'+cp_dob+'<fd>'+cp_dom+'<fd>'+cp_kidsinfo+'<fd>'+cp_hobby+'<fd>'+cp_trade_license+'<fd>'+cp_trade_licence_no+'<fd>'+cp_vat_registration+'<fd>'+cp_vat_reg_no+'<fd>'+
		cp_manager_name+'<fd>'+cp_manager_cont_no+'<fd>'+cp_starting_year+'<fd>'+cp_Category+'<fd>'+cp_lsc_covered+'<fd>'+cp_monthly_sales_capacity+'<fd>'+cp_monthly_sales+'<fd>'+cp_shop_rent_own+'<fd>'+cp_warehouse_capacity+'<fd>'+cp_shop_size+'<fd>'+cp_shop_front_size+'<fd>'+cp_truck_number+'<fd>'+cp_barge_number+'<fd>'+cp_status
		
		var url = "#page_confirm_profile_update";
		$.mobile.navigate(url);																

		}//must value
		
	}//function
	

//--------------------------Client profile: Profile Submit

function lscProfileSubmit(){
	$("#errorConfirmProfileUpdate").html('');	
	var lat=$("#lat_p").val();
	var longitude=$("#long_p").val();
	var client_id=$("#cp_id").val();
	
	var lscPhotoProfile=$("#lscPhotoProfile").val();
	
	var imageName=client_id+'.jpg'
	
	if (lat=='' || lat==0 || longitude=='' || longitude==0){
		$("#errorConfirmProfileUpdate").html('Location not Confirmed');		
	}else{
		
		if (clientUpdateStr==''){
			$("#errorConfirmProfileUpdate").html('Data not available');		
		}else{
			$("#btn_profile_update").hide();
			$("#wait_image_profile_update").show();		
			
			//$("#errorConfirmProfileUpdate").text(localStorage.base_url+'updateClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_data='+encodeURI(clientUpdateStr)+'&lat='+lat+'&long='+longitude+'&profile_photo='+imageName+'&profile_photo_str=abc')
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'updateClientProfile?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_data='+encodeURI(clientUpdateStr)+'&lat='+lat+'&long='+longitude+'&profile_photo='+imageName+'&profile_photo_str=abc',
				 success: function(result) {
						if (result==''){					
							$("#errorConfirmProfileUpdate").html('Sorry Network not available');
							$("#wait_image_profile_update").hide();		
							$("#btn_profile_update").show();
							
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#wait_image_profile_update").hide();		
								$("#btn_profile_update").show();
								
							}else if (resultArray[0]=='SUCCESS'){								
								//-----------
								
								clientUpdateStr=''
								$("#lat_p").val('');
								$("#long_p").val('');								
								$("#lscPhotoProfile").val('');
    							document.getElementById('myImageProfile').src = '';
								
										
								$("#lat").val('');
								$("#longitude").val('');
								
								$(".prof_market_class").html('');
								$(".prof_distributor_class").html('');								
								$(".prof_retailer_class").html('');
								
								$("#wait_image_profile_update").hide();		
								$("#btn_profile_update").show();
								
								
								//----
								
								var url = "#page_profile_update_success";	
								$.mobile.navigate(url);
								
							}else{						
								$("#errorConfirmProfileUpdate").html('Network Timeout. Please try again.');
								$("#wait_image_profile_update").hide();		
								$("#btn_profile_update").show();
								}
						}
					  },
				  error: function(result) {			  
					  $("#wait_image_profile_update").hide();		
					  $("#btn_profile_update").show();
				  }
			 });//end ajax	
			
		}
	}//check location
  }


//-------------------------- Visit Report: Show
function getVisitReportPage(){
	$("#err_visit_rpt").html('');	
	$("#wait_image_visit_report").hide();		
	
	$("#tbl_visit_rpt_show_campaign").empty();
	$("#tbl_visit_rpt_show_stock").empty();
	$("#tbl_visit_rpt_show_sales").empty();
	
	$("#ChartDivRetStock").empty();
	$("#retailerStock").val('');
	
	var url = "#page_visit_rpt";			
	$.mobile.navigate(url);
}


function visitReport(){
	$("#err_visit_rpt").html('');	
	$("#wait_image_visit_report").show();		
	
	$("#tbl_visit_rpt_show_campaign").empty();
	$("#tbl_visit_rpt_show_stock").empty();
	$("#tbl_visit_rpt_show_sales").empty();
	
	$("#ChartDivRetStock").empty();
	$("#retailerStock").val('');
	
	visit_client=localStorage.visit_client	
	clientId=visit_client.split('-')[1]
	
	//alert(localStorage.base_url+'getVisitReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId)
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'getVisitReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId,
		 success: function(result) {
				
				//alert(result);
				if (result==''){					
					$("#err_visit_rpt").html('Sorry Network not available');
					$("#wait_image_visit_report").hide();
	
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#err_visit_rpt").html(resultArray[1]);
						$("#wait_image_visit_report").hide();
						
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						$("#wait_image_visit_report").hide();
						
						var campaignData=resultArray[1]
						var stockData=resultArray[2]
						var marketInfoStockList=resultArray[3]
						var deliverySalesList=eval(resultArray[4])
						
						
						//------------------------
						var salesStrData='<tr ><td colspan="2" ><b>LSC Sales:</b></td></tr>'
                		salesStrData+='<tr style="font-weight:bold; text-shadow:none; color:#408080;" ><td >Month</td><td >Qty</td></tr>'
                		
						var deliverySalesListLength=deliverySalesList.length;						
						for (i=0; i < deliverySalesListLength; i++){
							var salesDictData=deliverySalesList[i];
							
							var month=salesDictData['Month']
							var qty=salesDictData['Qty']
							
							salesStrData+='<tr style="font-size:11px;"><td >'+month+'</td><td >'+qty+'</td></tr>'
							
							//alert(month+','+qty);
							}
												
						$("#tbl_visit_rpt_show_campaign").append(campaignData).trigger('create');						
						$("#tbl_visit_rpt_show_stock").append(stockData).trigger('create');
						$("#retailerStock").val(marketInfoStockList);
						
						$("#tbl_visit_rpt_show_sales").append(salesStrData).trigger('create');
						
						loadChart();
						//----
												
					}else{						
						$("#err_visit_rpt").html('Network Timeout. Please try again.');
						$("#wait_image_visit_report").hide();
						}
				}
			  },
		  error: function(result) {			  
			  $("#err_visit_rpt").html('Network Timeout. Please try again.');
			  $("#wait_image_visit_report").hide();
		  }
	 });//end ajax	
	
  }

//-------------------------------------

function getComplain() {	
	$("#error_complain").text("");
	
	var complain_type_string=localStorage.complain_type_string
	var complain_from_string=localStorage.complain_from_string
	
	//-----------------------------------	
	
	
	//-----------------------------------	
	var complain_type_List = complain_type_string.split('<rd>');
	var complain_type_ListLength=complain_type_List.length	
	
	var complainTypeList='<option value="0" > Select Type</option>'
	for (var j=0; j < complain_type_ListLength; j++){
		var complain_type= complain_type_List[j];		
		if(complain_type!=''){
			complainTypeList+='<option value="'+complain_type+'" >'+complain_type+'</option>';
			}
	}
	
	var complain_type_id_ob=$('#complain_type_id');
	complain_type_id_ob.empty()
	complain_type_id_ob.append(complainTypeList);
	complain_type_id_ob[0].selectedIndex = 0;
	
	$("#complain_ref").val('');
	$("#complain_details").val('');
	
	//-----------------------------------	
	var url = "#page_complain_new";	
	$.mobile.navigate(url);
	
	complain_from_id_ob.selectmenu("refresh");
	complain_type_id_ob.selectmenu("refresh");			
}

//=====
function complainSubmit(){
	$("#error_complain").html('');
	
	//var complain_from=$("#complain_from_id").val();
	var complain_ref=$("#complain_ref").val();
	var complain_type=$("#complain_type_id").val();
	var complain_details=$("#complain_details").val();
	var complain_from=' ';
	//if(complain_from=='' || complain_from==0){
//		$("#error_complain").html('Complain From Required');
//	}else{
	
		if(complain_ref=='' || complain_ref==0){
			$("#error_complain").html('Reference Required');	
		}else{
			if(complain_type=='' || complain_type==0){
				$("#error_complain").html('Complain Type Required');	
			}else{
				
				$("#btn_complain_submit").hide();
				$("#wait_image_complain_submit").show();	
			
				//$("#error_complain").html(localStorage.base_url+'complainSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&complain_from='+complain_from+'&complain_ref='+complain_ref+'&complain_type='+complain_type+'&complain_details='+complain_details)
				
				// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'complainSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&complain_from='+complain_from+'&complain_ref='+complain_ref+'&complain_type='+complain_type+'&complain_details='+complain_details,
					 success: function(result) {
							 
							if (result==''){					
								$("#err_visit_rpt").html('Sorry Network not available');
								$("#wait_image_complain_submit").hide();
								$("#btn_complain_submit").show();
								
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_complain").html(resultArray[1]);
									$("#wait_image_complain_submit").hide();
									$("#btn_complain_submit").show();
									
								}else if (resultArray[0]=='SUCCESS'){								
									//-----------
									$("#wait_image_complain_submit").hide();
									$("#btn_complain_submit").show();
									
									var sl=resultArray[1]
									
									var url = "#page_complain_success";	
									$.mobile.navigate(url);
									
									//----
												
								}else{						
									$("#error_complain").html('Network Timeout. Please try again.');
									$("#wait_image_complain_submit").hide();
									$("#btn_complain_submit").show();
									}
							}
						  },
					  error: function(result) {			  
						  $("#error_complain").html('Network Timeout. Please try again.');
						  $("#wait_image_complain_submit").hide();
						  $("#btn_complain_submit").show();
					  }
				 });//end ajax	
			}
		}
//	}
  }

//----
function showComplain(){
	$("#error_complain_page").html('');
	/*$("#btn_complain_submit").hide();
	$("#wait_image_complain_submit").show();*/	
	
	$("#tbl_show_complain").empty();
	
	//alert(localStorage.base_url+'showComplain?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'showComplain?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
		 success: function(result) {
				
				if (result==''){					
					$("#error_complain_page").html('Sorry Network not available');
					
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_complain_page").html(resultArray[1]);
												
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						
						var resData=resultArray[1]
						
						
						$("#tbl_show_complain").append(resData).trigger('create');
						
						
						var url = "#page_complain_show";	
						$.mobile.navigate(url);
						
						//----
									
					}else{						
						$("#error_complain_page").html('Network Timeout. Please try again.');						
						}
				}
			  },
		  error: function(result) {			  
			  $("#error_complain_page").html('Network Timeout. Please try again.');
		  }
	 });//end ajax
  }


//============= Show Task
function showTask(){
	$("#error_task_page").html('');
	
	$("#wait_image_task_submit").hide();
	
	$("#tbl_show_task").empty();
	
	//alert(localStorage.base_url+'showTask?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'showTask?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
		 success: function(result) {
				
				if (result==''){					
					$("#error_task_page").html('Sorry Network not available');
					
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_task_page").html(resultArray[1]);
						
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						
						var resData=resultArray[1]
						
						$("#tbl_show_task").append(resData).trigger('create');
						
						var url = "#page_task_show";	
						$.mobile.navigate(url);
						
						//----		
					}else{						
						$("#error_task_page").html('Network Timeout. Please try again.');						
						}
				}
			  },
		  error: function(result) {			  
			  $("#error_task_page").html('Network Timeout. Please try again.');
		  }
	 });//end ajax
  }

//============= Show Task
function updateTask(rowid){
	$("#error_task_list").html('');
	
	$("#btn_task_update"+rowid).hide();
	$("#wait_image_task_submit").show();
	
	$("#tbl_show_task").empty();
	
	//alert(localStorage.base_url+'showTask?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode)
	
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'showTask?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&action=Update&rowid='+rowid,
		 success: function(result) {
				
				if (result==''){					
					$("#error_task_list").html('Sorry Network not available');
					$("#btn_task_update"+rowid).show();
					$("#wait_image_task_submit").hide();
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#error_task_list").html(resultArray[1]);
						$("#btn_task_update"+rowid).show();
						$("#wait_image_task_submit").hide();
					
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						var resData=resultArray[1]
						
						$("#wait_image_task_submit").hide();
						
						$("#tbl_show_task").append(resData).trigger('create');
						
						var url = "#page_task_show";	
						$.mobile.navigate(url);
						
						//----		
					}else{						
						$("#error_task_list").html('Network Timeout. Please try again.');
						$("#btn_task_update"+rowid).show();
						$("#wait_image_task_submit").hide();				
						}
				}
			  },
		  error: function(result) {			  
			  $("#error_task_list").html('Network Timeout. Please try again.');
			  $("#btn_task_update"+rowid).show();
			  $("#wait_image_task_submit").hide();
		  }
	 });//end ajax
  }
  







//---------------------- Exit Application
function exit() {	
	navigator.app.exitApp();
}

//// ----------------Camera------------
//
////Image
//function getImage() {
//	navigator.camera.getPicture(onSuccessV, onFailV, { quality: 10,
//		destinationType: Camera.DestinationType.FILE_URI });
//}
//function onSuccessV(imageURI) {
//    var image = document.getElementById('myImage');
//    image.src = imageURI;
//	imagePath = imageURI;
//	$("#lscPhoto").val(imagePath);
//}
//function onFailV(message) {
//	imagePath="";
//    alert('Failed because: ' + message);
//}
//
////image Profile
//function getImageProfile() {	
//	navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
//		destinationType: Camera.DestinationType.FILE_URI });
//}
//function onSuccessProfile(imageURI) {
//    var image = document.getElementById('myImageProfile');
//    image.src = imageURI;
//	imagePath = imageURI;
//	$("#lscPhotoProfile").val(imagePath);
//}
//function onFailProfile(message) {
//	imagePath="";
//    alert('Failed because: ' + message);
//}

//------------------------------------------------------------------------------
//File upload 
//function uploadPhotoV(imageURI, imageName) {
//    var options = new FileUploadOptions();
//    options.fileKey="upload";
////    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
//    options.fileName=imageName;
////	options.fileName = options.fileName
//    options.mimeType="image/jpeg";
//
//    var params = {};
//    params.value1 = "test";
//    params.value2 = "param";
//
//    options.params = params;
//
//    var ft = new FileTransfer();
//     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url+"fileUploaderVisit/"),winV,failV,options);
//	//ft.upload(imageURI, encodeURI("http://127.0.0.1:8000/welcome/wab_sync/fileUploader/"),win,fail,options);
//}
//
//function winV(r) {
////    console.log("Code = " + r.responseCode);
////    console.log("Response = " + r.response);
////    console.log("Sent = " + r.bytesSent);
//}
//
//function failV(error) {
//	$(".errorChkVSubmit").text('Memory Error. Please take new picture and Submit');
//    //alert("An error has occurred: Code = " + error.code);
////    console.log("upload error source " + error.source);
////    console.log("upload error target " + error.target);
//}
//
////------------------------------------------------------------------------------
////File upload 
//function uploadPhotoProfile(imageURI, imageName) {
//    var options = new FileUploadOptions();
//    options.fileKey="upload";
//    options.fileName=imageName;
//    options.mimeType="image/jpeg";
//	
//    var params = {};
//    params.value1 = "test";
//    params.value2 = "param";
//	
//    options.params = params;
//	
//    var ft = new FileTransfer();
//     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url+"fileUploaderProfile/"),winProfile,failProfile,options);
//}
//
//function winProfile(r) {
////    console.log("Code = " + r.responseCode);
////    console.log("Response = " + r.response);
////    console.log("Sent = " + r.bytesSent);
//}
//
//function failProfile(error) {
//	$(".errorConfirmProfileUpdate").text('Memory Error. Please take new picture and Submit');
//    //alert("An error has occurred: Code = " + error.code);
////    console.log("upload error source " + error.source);
////    console.log("upload error target " + error.target);
//}
//


//=====================MAP Start=====================
function marketNextCProfile_map() {
	
	$("#err_m_retailer_next_cp").html('');
	
	var market_name=$("#profile_market_cmb_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_m_retailer_next_cp").text("Market required");
		}else{
			$("#wait_image_profile_market_ret").show();	
			
			
			//visitMarketStr
			var marketNameId=market_name.split('-');
			var market_Id=marketNameId[1];
			
			//alert(localStorage.base_url+'getMarketClientListMap?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
			//$("#map_path").text(localStorage.base_url+'getMarketClientListMap?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id);
			
			// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'getMarketClientListMap?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id,
				 success: function(result) {
						
						//alert(result);
						if (result==''){					
							$("#err_m_retailer_next_cp").html('Sorry Network not available');
							$("#wait_image_profile_market_ret").hide();
						}else{
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#err_m_retailer_next_cp").html(resultArray[1]);
								$("#wait_image_profile_market_ret").hide();
							}else if (resultArray[0]=='SUCCESS'){
								var m_client_string=resultArray[1];
								var result_show_Array = m_client_string.split('<fdfd>');	
								
								localStorage.map_desc=result_show_Array[0];
								localStorage.c_point=result_show_Array[1]
								
								$("#desc").val(localStorage.map_desc);
								$("#c_point").val(localStorage.c_point);
								
								initialize();
								google.maps.event.addDomListener(window, 'load', initialize);
								
								//-----
								$("#err_m_retailer_next_cp").html('');
								$("#wait_image_profile_market_ret").hide();	
								
								//---------	
								
								var url = "#page_market_ret_cprofile_map";
								$.mobile.navigate(url);
								
								}								
						}
					  },
				  error: function(result) {			  
					  $("#err_m_retailer_next_cp").html('Network Timeout. Please try again.');
					  $("#wait_image_profile_market_ret").hide();
					  
				  }
			 });//end ajax	
			
		}	
	
}
function initialize() {
  var center_point=$("#c_point").val();
  var center_point_Array = center_point.split(',');	
 // alert (center_point);
  var myLatlng = new google.maps.LatLng(parseFloat(center_point_Array[0]),parseFloat(center_point_Array[1]));
 // var myLatlng_1 = new google.maps.LatLng(60, 105);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
	

  }

 var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker, i;
  var icons="lafarge_g.png";
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Outlet',
	  icon: icons
	  
  });
 //alert ('nadira');
 var p_station=$("#desc").val();
 

  
  
  var fields = p_station.split('rdrd');
  var total_fields=p_station.split("rdrd").length
  //alert (total_fields);
  
  
 var locations = [];
 var field=[];
 var j=0;
 
 for (j = 0; j < total_fields; j++){
	 var s=0;
	 var fields_single = fields[j].split(',');
  	 var total_fields_single=fields[j].split(",").length
	 var arr=[];
	 for (s = 0; s < total_fields_single; s++){
		 arr.push(fields_single[s]);
  		}
	locations.push(arr);
 }
 
 
 var infowindow = new google.maps.InfoWindow();
 var marker, i;
 var icons="lafarge_g.png";
 
 
 
 for (i = 0; i < locations.length; i++) {  
 	
   //check double shop==============
	  var searchS=locations[i][1]+','+locations[i][2];
	  var mOutlet = p_station.split('rdrd');
	  var total_mOutlet=p_station.split("rdrd").length
	  show_info='';
	  //alert (total_mOutlet);
	  for (var m = 0; m < total_mOutlet; m++){
		
		 if ( (mOutlet[m].search(searchS))!= -1 ){
			 var mOutlet_single=mOutlet[m].split(',');
			 if (show_info==''){
				 show_info='<div  style="height:300px; width:700px">'+mOutlet_single[m][0]+'</div>';
				 icons="lafarge_g.png";
			 }
			 else{
				//alert (locations[i][0]); 
				show_info=show_info+'<div style="background-color:#408080; height:2px"></div>'+'<div  style="height:300px; width:700px">'+mOutlet_single[m][0]+'</div>';	 
				icons="lafarge_g.png";
			 }
			 
		 }
		
		 //alert ('start: '+locations[i][0])
	   }// double check for loop
	  
   //======check double shop end========
   		
		
	  marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: map,
		icon: icons
	   
	  });
		  
		  

      		google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					
				  //check double shop==============
				  var searchS=locations[i][1]+','+locations[i][2];
				  var mOutlet = p_station.split('rdrd');
				  var total_mOutlet=p_station.split("rdrd").length
				  show_info='';
				  
				  for (var m = 0; m < total_mOutlet; m++){
					 if ( (mOutlet[m].search(searchS))!= -1 ){
						 var mOutlet_single=mOutlet[m].split(',');
						 if (show_info==''){
							 show_info='<div  style="height:auto; width:auto">'+locations[i][0]+'</div>';
							
						 }
						 else{
							show_info=show_info+'<div style="background-color:#408080; height:2px"></div>'+'<div  style="height:300px; width:700px">'+locations[i][0]+'</div>';	 
							
						 }
						
					 }
					 
				   }// double check for loop
			   //======check double shop end========	
					
				  infowindow.setContent(show_info);
				  infowindow.open(map, marker);
				}
      		})(marker, i));
	  
  
  		//alert (i)
  
 }  //main for
  
  
}
//=====================MAP End=====================


//--------------------Item Search Start----------------
function search_item() {	
	var p_name=$("#item_search").val();
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (var j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#order_qty"+product_id).focus().select();
			$("#item_search").val('');
			return;
		}
				
	}
	
}


//--------------------Item Search End----------------
//--------------------cart Start----------------
function cart_data() {	
	
	if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		var product_tbl_cart_str='<ul  data-role="listview">';
		var total_value=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				var product_name=$("#order_name"+orderProductId).val(); 
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;
				
				product_tbl_cart_str=product_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input  type="number" id="cart_qty'+orderProductId+'"  onBlur="getCartData_keyup(\''+orderProductId+'\')" value="'+orderProductQty+'" placeholder="0"> </td><td  style="text-align:left;">'+ product_name.toUpperCase()+'</td></tr>'+'</table>'+'</li>'

				}
		
		}
		product_tbl_cart_str=product_tbl_cart_str+'</ul>';		
		
		
		localStorage.product_tbl_cart=product_tbl_cart_str;//+'</table>';
		localStorage.total_value=total_value.toFixed(2);
		$('#product_list_tbl_cart').empty();
		$('#product_list_tbl_cart').append(localStorage.product_tbl_cart).trigger('create');
		
		var show_total='';
		if (localStorage.set_flag_api=='ORDER'){
			show_total="Total Order Amount: "+localStorage.total_value + " BDT"
		}
		if (localStorage.set_flag_api=='DELIVERY'){
			show_total="Total Delevery Amount: "+localStorage.total_value + " BDT"
		}
		if (localStorage.set_flag_api=='REQUISITION'){
			show_total="Total Requisition Amount: "+localStorage.total_value + " BDT"
		}
		
		localStorage.show_total=show_total;
		
		
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		$("#order_total_show").html(localStorage.show_total);
		
	}
	else{
		
		
		var url = "#page_order";	
		$.mobile.navigate(url);
	}
	
	
	
	
}



//==============================================
function getCartData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#cart_qty"+product_id).val().replace('.','').substring(0,4);
	$("#cart_qty"+product_id).val(pqty);
	
	
	$("#order_qty"+product_id).val(pqty);
	var productOrderStr=localStorage.productOrderStr
	
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			var orderProductList=localStorage.productOrderStr.split('<rd>');
			var orderProductLength=orderProductList.length;
			for (var j=0; j < orderProductLength; j++){
				var orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					var orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
				//	alert (productOrderStr.indexOf(product_id));
					//alert (orderProductList[j]);
					if (orderProductId==pid){
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							if(productOrderStr.indexOf('<rd>')>0){
								productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							}
							else{
								productOrderStr=productOrderStr.replace(orderProductList[j], "")
							 }
								//alert (productOrderStr);
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		for (var j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					} //if (orderProductLength>1){
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					} //if (orderProductLength==1
				
				} //if (orderProductId==pid)
					
					
					
				}//if(orderProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productOrderStr=productOrderStr
		
		//================price===========
		if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		
		var total_value=0
		for (var j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				
				
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;

				
				
				}
		
		}
		
		
		
		//alert (total_value)
		localStorage.total_value=total_value.toFixed(2);
		
		$("#product_total_cart").html("Total Order Amount: "+localStorage.total_value + " BDT");
		$("#product_total_last").html("Total Order Amount: "+localStorage.total_value + " BDT");

	}
		
		
//		==================================
	}

//----------------------cart end----------------

function payment_mode(){
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	
	//localStorage.set_flag_api='REQUISITION'
	//alert (localStorage.set_flag_api)
	if (localStorage.set_flag_api=='REQUISITION'){
		//alert (localStorage.set_flag_api)
		//alert (localStorage.visit_location_flag!='YES')
		$("#submit_buttons").hide('');
		$("#delivery_date_div").hide('');
		$("#payment_date_div").hide('');
		$("#payment_mode_div").hide('');
		$("#footer_button").hide('');
		
		if (lat=='' || lat==0 || longitude=='' || longitude==0){
		visit_location_error_flag=0;
		
		$("#btn_location").hide();	
		$("#visit_submit").show();	
		}
		
		//if (localStorage.visit_location_flag=='YES'){
//		//alert (localStorage.visit_location);
//		$("#visit_location").hide();
//		$("#visit_submit").show();
//		
//		}
//		else{
//			$("#visit_location").show();
//			$("#visit_submit").hide();
//		}
		
		
		$("#req_attr_div").show('');
	}
	else{
		$("#req_attr_div").hide('');
	}
	
	var url = "#page_visit";
	$.mobile.navigate(url);
	localStorage.payment_mode=payment_mode
}

function cancel_cart() {
	$(".orderProduct").val('');
	
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	$("#order_total_show").html('');
	$("#chemist_feedback").val('');
	
	$("#item_combo_id").val('');
	
	$("#errorChkVSubmit").val('');
	
	
	
	
	//Blank Req info
	//$("#adj_type_1").val("");
	//$('#adj_type_1').val("").attr("selected", "selected");
	//$("#adj_date_1").val('');
	//$("#adj_amount_1").val('');
	//$("#note_1").val('');
	



	//==============
	
	
	
	
	localStorage.productOrderStr='';
	$("#product_list_tbl_cart").html("");
	var url = "#page_visit";	
	$.mobile.navigate(url);
}



//======================Doctor End==============
function clear_mgs(){
	$("#error_login").html('');
	$("#error_login").html('');	
	$("#err_retailer_date_next").html('');	
	$("#err_retailer_next").html('');
	$("#err_market_next").html('');
	$("#errorChkVSubmit").html('');
	$("#err_market_next_cp").html('');
	$("#err_m_retailer_next_cp").html('');
	$("#err_distributor").html('');
	$("#error_del_submit").html('');
	$("#err_p_market").html('');
	$("#err_plan_visit").html('');
	$("#err_visit_rpt").html('');
	$("#error_complain").html('');
	$("#error_complain_page").html('');
	$("#error_task_page").html('');
	$("#error_task_list").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_m_retailer_next_cp").html('');
	$("#err_market_next").html('');
	$("#errorChkVSubmit").html('');
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	
	
	
}

function client_catList() {	
	$('#catCombo').empty();
	var catArray=localStorage.clientCat_string.split('<rd>')	
	var ob = $("#catCombo");
	var ob_profile = $("#catCombo_profile");
	var value="";
	//var text="Category";
	
	
	//for (var p=0; p<catArray.length; p++){
//		var catId = catArray[p];
//		ob.prepend("<option value='"+ catId+"'>" + catId + "</option>");
//		ob_profile.prepend("<option value='"+ catId+"'>" + catId + "</option>");
//		}	
	
	
	ob.prepend("<option value=''>All</option>");
	ob_profile.prepend("<option value=''>All</option>");
	
	ob.prepend("<option value=''>Category</option>");
	ob_profile.prepend("<option value=''>Category</option>");
}




//=========================Menu functions Start=================

function chemist_visit() {
	$("#ret_cat").show();
	$("#d_visit").html("Outlet");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Outlet </font>');
	
	
	
	$("#btn_location").show();
	$("#visit_submit").hide();
	$("#checkLocation").html('');
	$("#footer_button").show();
	$("#submit_buttons").show();
	
	$("#info_button").show();
	localStorage.doctor_flag=0;
	localStorage.visit_page="NO";
	addMarketList();
	localStorage.saved_data_submit=0;
	
}
function saved_visit() {
	$("#footer_button").show();
	$("#submit_buttons").show();
	$("#info_button").show();
	localStorage.saved_data_submit=0;
	
	localStorage.set_flag_api=''
	var url = "#page_saved_visit";
	$.mobile.navigate(url);
	getvisitSave_data();
}
function chemist_profile() {
	$("#footer_button").show();
	
	
	$("#info_button").show();
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit > Market > Chemist</font>');
	localStorage.doctor_flag=0;
	
	localStorage.set_flag_api=''
	
	localStorage.saved_data_submit=0;
	addMarketListCp();
	
	
}

function feedback() {
	localStorage.saved_data_submit=0;
	getComplain();
	localStorage.set_flag_api=''
	var url = "#page_complain";	
	$.mobile.navigate(url);
}

function requisition() {
	$("#btn_location").show();
	$("#submit_buttons").hide();
	$("#visit_submit").hide();
	$("#checkLocation").html('');
	$("#footer_button").hide();
	
	set_flag_requisition();
	$("#info_button").hide();
	
	
	localStorage.saved_data_submit=0;
	localStorage.visit_page="NO";
	addDepotList();
	
}

//===================Menu end===============


function reports() {
	var str_report_rep='<table width="100%" border="0">'+
					 '<tr><td>Rep: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" readonly="true" placeholder="Rep">'+
					  '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>'+
					   '<tr><td>Market: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market"  ></td></tr></table>'
	var str_report_sup='<table width="100%" border="0">'+
					   '<tr><td>Rep: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" placeholder="Rep">'+
					   '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>	'+
					   '<tr><td>Market: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market/level"  ></td></tr></table>'	
	
	if (localStorage.user_type=='rep'){
		localStorage.str_report=str_report_rep;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	if (localStorage.user_type=='sup'){
		localStorage.str_report=str_report_sup;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	
	var url = "#page_reports_dcr";
	$.mobile.navigate(url);
}


function market_list_combo() {	
	$('#se_market').empty();
	$('#se_market_doc').empty();
	var marketArray=localStorage.marketListStr.split('<rd>')	
	var ob = $("#se_market");
	var ob_1 = $("#se_market_doc");
	var value="";
	for (var p=0; p<marketArray.length; p++){
		market_single=marketArray[p].split('<fd>')
		var marketId = market_single[0];
		var marketName = market_single[1];
		ob.prepend("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		ob_1.prepend("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		}	
	ob.prepend("<option value=''>Market</option>");
	ob_1.prepend("<option value=''>Market</option>");
}


function item_list_combo() {	
	$('#se_item').empty();
	var productArray=localStorage.productListStr.split('<rd>')	
	var ob = $("#se_item");
	var value="";
	
	for (var p=0; p<productArray.length; p++){
		product_single=productArray[p].split('<fd>')
		var item_id = product_single[0];
		var name = product_single[1];
		ob.prepend("<option value='"+ item_id+"'>" + name+"-"+item_id + "</option>");
		}	
	ob.prepend("<option value=''>Item</option>");
}

function mpo_list_combo() {	
	$('#se_mpo').empty();
	var ob = $("#se_mpo");
	var user_type=localStorage.user_type;
	//alert (user_type);
	if (user_type=='rep'){
		ob.prepend("<option value='"+ localStorage.user_id +"'>" + localStorage.user_id + "</option>");
	}
	
	

}



//=========================Menu functions End=================

$(document).on("pagecreate", "#page_order", function(){    
//$("item_combo_id").keyup(function(){
    $("#item_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch);
});

function startsWithSearch( idx, searchValue ) {
    
	var ret = false;
    if (searchValue && searchValue.length > 0){        
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
    return ret;
}
//-------------GIft
$(document).on("pagecreate", "#page_doctor_gift", function(){    
	$("#gift_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_gift);
});

function startsWithSearch_gift( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 
//-------------GIft
$(document).on("pagecreate", "#page_doctor_ppm", function(){    
	$("#ppm_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_ppm);
});

function startsWithSearch_ppm( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 
//------------Sample
$(document).on("pagecreate", "#page_doctor_sample", function(){    
	$("#sample_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_sample);
});

function startsWithSearch_sample( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 

//--------------Campaign
//------------Sample
$(document).on("pagecreate", "#page_doctor_campaign", function(){    
	$("#campaign_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_campaign);
});

function startsWithSearch_campaign( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
}


//------------Depot
$(document).on("pagecreate", "#page_rec_depot", function(){    
	$("#dis_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_depot);
});

function startsWithSearch_depot( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5 ){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 

//------------Market
$(document).on("pagecreate", "#page_market", function(){    
	$("#unschedule_market_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_market);
});

function startsWithSearch_market( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5 ){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 

//------------Chemist
$(document).on("pagecreate", "#page_market_ret", function(){    
	$("#unscheduled_m_client_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_ret);
});

function startsWithSearch_ret( idx, searchValue ) {
	var ret = false;
	//alert (searchValue);
    if (searchValue && searchValue.length > 0){ 
        var text = $(this).text().toUpperCase();
		
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5){
			ret = true; //filter this one out
        }
    } 
    return ret;
} 




//==============================html script==========================

$(document).ready(function(){
	
	//=====Set menu============
	$('#menu_show').empty();
	$('#menu_show').append(localStorage.menu_list).trigger('create');
	//===========Set menu end========										
											
											
	$("#wait_image_login").hide();
	$("#loginButton").show();
	
	$("#wait_image_schedule_date").hide();		
	$("#btn_schedule_date").show();
	
	$("#wait_image_schedule_ret").hide();		
	$("#btn_schedule_ret").show();
	
	$("#wait_image_unschedule_market").hide();		
	$("#btn_unschedule_market").show();
	
	$("#wait_image_ret").hide();	
	$("#wait_image_unschedule_market_ret").hide();		
	$("#btn_unschedule_market_ret").show();
	
	$("#wait_image_visit_submit").hide();		
	$("#visit_submit").show();
	
	$("#wait_image_delivery_submit").hide();		
	$("#btn_delivery_submit").show();
	
	$("#wait_image_delivery_dealer").hide();		
	$("#btn_delivery_dealer").show();
	
	$("#wait_image_profile_market").hide();		
	$("#btn_profile_market").show();
	
	$("#wait_image_profile_market_ret").hide();		
	$("#btn_profile_market_ret").show();
	
	$("#wait_image_profile_update").hide();		
	$("#btn_profile_update").show();
	
	$("#wait_image_visit_plan_market").hide();		
	$("#btn_visit_plan_market").show();
	
	$("#wait_image_visit_plan_submit").hide();		
	$("#btn_visit_plan_submit").show();
	
	$("#wait_image_visit_report").hide();
	
	$("#wait_image_complain_submit").hide();
	$("#btn_complain_submit").show();	
	
	$("#wait_image_region_report").hide();
	
	$("#btn_location_doc").show();
	$("#visit_submit_doc").hide();	
	$("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide('');
	
	$("#req_attr_div").hide('');
	

	
	
	
	client_catList();
	first_page();
	
	
	//Set report combo 
	market_list_combo();
	item_list_combo();
	mpo_list_combo()
	
	$("#se_mpo").val(localStorage.user_id);
	
	
	$("#product_list_tbl").html(localStorage.product_tbl_str);
	$("#del_product_list_tbl").html(localStorage.product_tbl_del_str);
	
	$("#sch_date").val(localStorage.search_date);
	
	
	//reports();
	
	
	$('#order_report_button').empty();
	$('#order_report_button').append(localStorage.report_button).trigger('create');
	
	
	
	//set doctor
	
	
	//Set total 
	$("#product_total_cart").html(localStorage.show_total);
	$("#product_total_last").html(localStorage.show_total);
	
	
	//Set Campaign
	//	$('#doctor_campaign_list_tbl').empty();
	//	$('#doctor_campaign_list_tbl').append(localStorage.product_tbl_str_doc_campaign).trigger('create');
		
	
	// delivery qty refresh during client change
	jQuery("#delivery_retailer_cmb_id").change(function(){	
		var productList=localStorage.productListStr.split('<rd>');
		var productLength=productList.length;
		
		for (var i=0; i < productLength; i++){				
			var deleveryItemArray = productList[i].split('<fd>');
			var productId=deleveryItemArray[0];											
			jQuery("#delivery_qty"+productId).val("");
		}				
	});
	
	//------
	
	//===============Map=============
	$("#desc").val(localStorage.map_desc);
	$("#c_point").val(localStorage.c_point);		
	//==============Map end===========
	
	
	
	
	
	
	//================== Redirect to visit page
	if ((localStorage.doctor_flag==0) &&(localStorage.visit_page=="YES")){
		$("#sch_date").val(localStorage.scheduled_date);
		
		$(".market").html(localStorage.visit_market_show);
		$(".visit_distributor").html(localStorage.visit_distributor_nameid);
		$(".visit_type").html(localStorage.visit_type);								
		$(".s_date").html(localStorage.scheduled_date);
		$(".visit_client").html(localStorage.visit_client_show);
		mobile_off_flag=1;
		
		//var url = "#page_visit ";
//		$.mobile.navigate(url);	
		getOrder_load();	
	}
	
	
	
});

//  ============== Schedule Client Combo===========
$.mobile.document.on( "listviewcreate", "#schedule_client_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#schedule_client_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#schedule_client_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#schedule_client_combo_id-dialog", function( e ) {
	var form = $( "#schedule_client_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#schedule_client_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//------------------------------------- Unschedule market combo -----------------------------

$.mobile.document.on( "listviewcreate", "#unschedule_market_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#unschedule_market_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#unschedule_market_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#unschedule_market_combo_id-dialog", function( e ) {
	var form = $( "#unschedule_market_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#unschedule_market_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});	

//-----------------  Unschedule Market Client/retailer list
$.mobile.document.on( "listviewcreate", "#unscheduled_m_client_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#unscheduled_m_client_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#unscheduled_m_client_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#unscheduled_m_client_combo_id-dialog", function( e ) {
	var form = $( "#unscheduled_m_client_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#unscheduled_m_client_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//-------------------------------------Delivery Distributor Combo list -----------------------------

$.mobile.document.on( "listviewcreate", "#delivery_distributor_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#delivery_distributor_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#delivery_distributor_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#delivery_distributor_cmb_id-dialog", function( e ) {
	var form = $( "#delivery_distributor_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#delivery_distributor_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

//-------------------------------------Delivery distributor client/ retailer -----------------------------

$.mobile.document.on( "listviewcreate", "#delivery_retailer_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#delivery_retailer_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#delivery_retailer_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#delivery_retailer_cmb_id-dialog", function( e ) {
	var form = $( "#delivery_retailer_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#delivery_retailer_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
	

//------------------------------------- visit plan market -----------------------------
$.mobile.document.on( "listviewcreate", "#visit_market_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#visit_market_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#visit_market_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#visit_market_cmb_id-dialog", function( e ) {
	var form = $( "#visit_market_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#visit_market_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

//------------------------------------- visit plan client/ retailer -----------------------------

$.mobile.document.on( "listviewcreate", "#visit_plan_client_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#visit_plan_client_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#visit_plan_client_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#visit_plan_client_cmb_id-dialog", function(  e ) {
	var form = $( "#visit_plan_client_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#visit_plan_client_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
	

//------------------------------------- marchandizing Item  -----------------------------

$.mobile.document.on( "listviewcreate", "#marchandizing_item_id-menu", function( e ) {
	var input,
		listbox = $( "#marchandizing_item_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#marchandizing_item_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#marchandizing_item_id-dialog", function( e ) {
	var form = $( "#marchandizing_item_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#marchandizing_item_id-listbox" );
	form 
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Market Combo---------
$.mobile.document
.on( "listviewcreate", "#se_market-menu", function( e ) {
	var input,
		listbox = $( "#se_market-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='marketSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_market-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_market-dialog", function( e ) {
	var form = $( "#se_market-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_market-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
//==========================================doctor===============

$.mobile.document
.on( "listviewcreate", "#se_market_doc-menu", function( e ) {
	var input,
		listbox = $( "#se_market_doc-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='marketSearch_doc' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_market_doc-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_market_doc-dialog", function( e ) {
	var form = $( "#se_market_doc-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_market_doc-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Item Combo---------
$.mobile.document
.on( "listviewcreate", "#se_item-menu", function( e ) {
	var input,
		listbox = $( "#se_item-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='itemSearch' data-type='search'></input></br>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_item-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_item-dialog", function( e ) {
	var form = $( "#se_item-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_item-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});



//=======================Report=================
function set_report_parameter() {	
	var date_from=$("#date_from").val();
	var date_to=$("#date_to").val();
	var rep_id_report=$("#se_mpo").val();
	var se_item_report=$("#se_item ").val();
	var se_market_report=$("#se_market ").val();
	
	//alert (date_from);
	//alert (se_item_report)
	if (se_market_report==""){
		se_market_report="All"
	}
	if (se_item_report==""){
		se_item_report="All"
	}
	
	if (date_from.length==0){
		date_from_show="Today"
	}
	else{
		date_from_show=date_from
	}
	if (date_to.length==0){
		date_to_show="Today"
	}
	else{
		date_to_show=date_to
	}
	//alert (se_item_report);
	
	
	localStorage.date_from=date_from
	localStorage.date_to=date_to;
	localStorage.rep_id_report=rep_id_report;
	localStorage.se_item_report=se_item_report;
	localStorage.se_market_report=se_market_report;
	
	
	$("#report_market").html("Market :"+localStorage.se_market_report);
	$("#report_item").html("Item :"+localStorage.se_item_report);
	$("#report_mpo").html("MPO :"+localStorage.rep_id_report);
	$("#date_f").html("DateFrom :"+date_from_show);
	$("#date_t").html("DateTo :"+date_to_show);
	
}
function s_order_summary_report() {		
	//set_report_parameter();
	set_report_parameter_doctor();

	// Blank all div
	$("#sales_call").html("");
	$("#order_count").html("");
	$("#order_value").html("");
	$("#rep_detail").html("");
	
	// ajax-------
	
	//$("#myerror_s_report").html(localStorage.base_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
							//$("#btn_schedule_date").show();
							//$("#wait_image_schedule_date").hide();
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var sales_call=resultList[0];
								var order_count=resultList[1];
								var order_value=resultList[2];
							
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header").text("Sales Call and Order Count");
								$("#sales_call").html("<font style='font-size:15px; color:#666'>"+"Sales Call:"+"</div>"+sales_call);
								$("#order_count").html("<font style='font-size:15px; color:#666'>"+"Order Count:"+"</div>"+order_count);
								$("#order_value").html("<font style='font-size:15px; color:#666'>"+"Order Value:"+"</div>"+order_value);


								$("#rep_detail").html("");
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_sc_order_summary_report";
	$.mobile.navigate(url);	
}

//========================Detail Report============
function s_order_detail_report() {	
	//set_report_parameter();
	set_report_parameter_doctor();
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f").html("Date :"+date_from_show_doc);
	$("#date_t").html("");
	
	
	
	// Blank all div
	$("#sales_call").html("");
	$("#order_count").html("");
	$("#order_value").html("");
	$("#rep_detail").html("");
	
	
	// ajax-------
	//$("#myerror_s_report").html(localStorage.base_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var sales_call=resultList[0];
								var order_count=resultList[1];
								var order_value=resultList[2];
								var rep_detail=resultList[3];
								//alert (result_string)
								
								//-----------------
								$("#err_retailer_date_next").text("");
								$("#report_header").text("Sales Call and Order Detail");
								
								$("#sales_call").html("<font style='font-size:15px; color:#666'>"+"Sales Call:"+"</font>"+sales_call);
								$("#order_count").html("<font style='font-size:15px; color:#666'>"+"Order Count:"+"</font>"+order_count);
								$("#order_value").html("<font style='font-size:15px; color:#666'>"+"Order Value:"+"</font>"+order_value);
								$("#rep_detail").html("<font style='font-size:9px;'>"+rep_detail+"</font>");
								
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_sc_order_summary_report";
	$.mobile.navigate(url);	
}
//========================Doctor report
function set_report_parameter_doctor() {	
	var date_from_doc=$("#date_from_doc").val();
	var date_to_doc=$("#date_to_doc").val();
	var rep_id_report_doc=$("#se_mpo_doc").val();
	var se_item_report_doc=$("#se_item_doc").val();
	var se_market_report_doc=$("#se_market_doc").val();
	
	if (se_market_report_doc==""){
		se_market_report_doc="All"
	}
	
	
	se_item_report="All"
	
	if (date_from_doc.length==0){
		date_from_show_doc="Today"
	}
	else{
		date_from_show_doc=date_from_doc
	}
	if (date_to_doc.length==0){
		date_to_show_doc="Today"
	}
	else{
		date_to_show_doc=date_to_doc
	}
	//alert (se_item_report);
	
	if (rep_id_report_doc.length==0){
		rep_id_report_doc=localStorage.user_id;
	}
	
	localStorage.date_from_doc=date_from_doc
	localStorage.date_to_doc=date_to_doc;
	localStorage.rep_id_report_doc=rep_id_report_doc;
	localStorage.se_item_report_doc=se_item_report_doc;
	localStorage.se_market_report_doc=se_market_report_doc;
	
	
	$("#report_market_doctor").html("Market :"+localStorage.se_market_report_doc);
	$("#report_mpo_doctor").html("MPO :"+localStorage.rep_id_report_doc);
	$("#date_f_doctor").html("DateFrom :"+date_from_show_doc);
	$("#date_t_doctor").html("DateTo :"+date_to_show_doc);
	
	
	
	$("#report_market").html("Market :"+localStorage.se_market_report_doc);
	$("#report_mpo").html("MPO :"+localStorage.rep_id_report_doc);
	$("#date_f").html("DateFrom :"+date_from_show_doc);
	$("#date_t").html("DateTo :"+date_to_show_doc);
	

}




function summary_report_doctor() {		
	set_report_parameter_doctor();
	
	//Blank all div
	
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
	
	
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctor").html(localStorage.base_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var visit_count=resultList[0];
								var visit_areawise=resultList[1];
								var visit_repwise=resultList[2];
							
								
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header_doc").text("DCR Count");
								$("#visit_count_doctor").html("<font style='font-size:15px; color:#666'>"+"visit Count:"+visit_count+"</font>");
								$("#visit_withAtt_doctor").html("<font style='font-size:15px; color:#666'>"+visit_areawise+"</font>");
								$("#visit_withoutAtt_doctor").html("<font style='font-size:15px; color:#666'>"+visit_repwise+"</font>");
								
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_report_doctor";
	$.mobile.navigate(url);	
}

//========================Detail Report============
function detail_report_doctor() {	
	set_report_parameter_doctor();

	
	
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f_doctor").html("Date :"+date_from_show_doc);
	$("#date_t_doctor").html("");
	
	 //Blank all div
	
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctor").html(localStorage.base_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,
				 success: function(result) {
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');

								var visit_count=resultList[0];
								var visit_with_attribute=resultList[1];
								var visit_without_attribute=resultList[2];
								var report_detal =resultList[3];
							
								
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header_doc").text("DCR Detail");
								
								
								
								$("#visit_count_doctor").html("visit Count:"+visit_count);
								
								if (localStorage.user_type=='sup'){
									$("#visit_withAtt_doctor").html(visit_with_attribute);
									$("#visit_withoutAtt_doctor").html(visit_without_attribute);
								}
								
								$("#rep_detail_doctor").html("<div width='70%'>"+report_detal+"</div>");
								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_report_doctor";
	$.mobile.navigate(url);	
}



//-----------------------------Visit Save Start
function visitSave(){
	// alert ("NNNN");
	$("#errorChkVSubmit").text("");
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');


	visitClientId=localStorage.visit_client
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	productOrderStr=localStorage.productOrderStr
	marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//----------------------- marchandizing status check
	if (marchandizingInfoStr==undefined){
		marchandizingInfoStr=''
	}else{
		var marchandizingList=marchandizingInfoStr.split('<rd>');	
		var marchandizingItemLength=marchandizingList.length;	
		var photoRequired="No";
		for (var i=0; i < marchandizingItemLength; i++){		
			var marchandizingArray = marchandizingList[i].split('<fd>');
			var item_status=marchandizingArray[5];	
			if(item_status=='Bad'){
				photoRequired="Yes";
				break;
				}
		}
	}
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback

	
	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);

	localStorage.payment_mode=$("#payment_mode").val();
	if (photoRequired=='Yes' && lscPhoto==''){
		$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
	}else{
		var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
		

			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit").html('Invalid Visit Type');
				}else{
					$("#visit_submit").hide();
					$("#wait_image_visit_submit").show();		
					//alert (localStorage.productOrderStr);
					
					//$("#err_save_visit").text(visitClientId+'<fd>'+visit_type+'<fd>'+scheduled_date+'<fd>'+marketInfoStr+'<fd>'+productOrderStr+'<fd>'+marchandizingInfoStr+'<fd>'+campaign_str+'<fd>'+lat+'<fd>'+longitude+'<fd>'+imageName+'<fd>'+localStorage.payment_mode+'<fd>'+chemist_feedback+'<rd>')
					
													
				var save_data = localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+localStorage.payment_mode+'<fdfd>'+chemist_feedback+'<rdrd>';	
													//-----------
							
			// Save data edit========================
			if (localStorage.saved_data_submit==1){
				var visit_save=localStorage.visit_save;
				var saved_data_show=localStorage.saved_data_show;
				var visit_save_data=visit_save.replace(saved_data_show+"<rdrd>",save_data)
				//localStorage.visit_save=visit_save_data;
				localStorage.visit_save=visit_save_data
				after_save_data();
				
			}
			else{
				if (saved_dataArray.length-1 < parseInt(localStorage.save_visit_limit) ){
					localStorage.visit_save=localStorage.visit_save+save_data
					after_save_data();
				}
				else{
					alert ("Your Saved limit is " +localStorage.save_visit_limit );
				}
			}
			
					var url = "#page_confirm_visit_success";	
					$.mobile.navigate(url);
													
																							
			
			
			}
		}
	
	
	}//end saved data limit
	
}

function after_save_data(){
	localStorage.visit_client=''
	localStorage.marchandizingStr=''
	
	localStorage.marketInfoLSCStr=''
	
	localStorage.marketInfoStr='';
	localStorage.marketInfoSubmitStr='';
	
	localStorage.productOrderStr='';
	localStorage.marchandizingInfoStr='';
	localStorage.visit_camp_list_str='';
	localStorage.visit_camp_submit_str='';
	visitCampaginTempArray=[];
	visitCampaginArray=[];
	
	localStorage.visit_page="";
	
	localStorage.show_total="";
	
	$("#chemist_feedback").val('')
							
							

	//-------------
	// Clear localStorage
		
	localStorage.productOrderStr='';
	cancel_cart();
		

	//--------------------------------------------------------
	$(".visit_client").html('');
	
	$("#errorChkVSubmit").html('');
	$("#lat").val('');
	$("#longitude").val('');
	$("#lscPhoto").val('');
	document.getElementById('myImage').src = '';
	
	$("#lat_p").val('');
	$("#long_p").val('');								
	
	$("#checkLocation").html('');
	$("#checkLocationProfileUpdate").html('');
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	
	$("#product_total_last").html('');
	$("#product_list_tbl_cart").html('');
	$("#product_total_cart").html('');
	$("#item_combo_id").val('Search');
	
	
	
	//--
	$("#visit_success").html('</br></br>'+'</br>Saved Successfully');
	
	
	$("#btn_location").show();	
	$("#visit_submit").hide();
	$("#checkLocation").hide('');
	
}


//================== Show saved visit
function getvisitSave_data(){
	var visit_save=localStorage.visit_save
	var saved_dataArray =visit_save.split('<rdrd>');
	
	var saved_data_list="";
	
	//alert (saved_dataArray.length)
	for (var i=0; i < saved_dataArray.length -1 ; i++){
		var visit_market_show = saved_dataArray[i].split('<fdfd>')[0];
		var visit_client_show = saved_dataArray[i].split('<fdfd>')[1];
		
		localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show
			
	   saved_data_list=saved_data_list+'<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="set_save_data('+i+')"  ><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+visit_client_show+'( '+visit_market_show+' )'+'</font></a></li>'
	  // alert (client_id);
														
	}
	var saved_visit=$('#saved_visit');
	
	saved_visit.empty()
	saved_visit.append(saved_data_list);
	saved_visit.listview("refresh");
	//alert (client_id)												
}

function set_save_data(i){
	cancel_cart();
	var visit_save=localStorage.visit_save
	var saved_data_show =visit_save.split('<rdrd>')[i];
	localStorage.saved_data_show = saved_data_show;
	
	
	var saved_data_show_array=saved_data_show.split('<fdfd>')
	
	var market_name = saved_data_show_array[0];
	var visit_client = saved_data_show_array[1];
	
	var visitClientId = saved_data_show_array[2];
	var visit_type = saved_data_show_array[3];
	var scheduled_date = saved_data_show_array[4];
	var marketInfoStr = saved_data_show_array[5];
	var productOrderStr = saved_data_show_array[6];
	var marchandizingInfoStr = saved_data_show_array[7];
	var campaign_str = saved_data_show_array[8];
	var lat = saved_data_show_array[9];
	var longitude = saved_data_show_array[10];
	var imageName = saved_data_show_array[11];
	var payment_mode = saved_data_show_array[12];
	var chemist_feedback = saved_data_show_array[13];
	
	
	//localStorage.visit_market_show+'<fdfd>'+localStorage.visit_client_show+'<fdfd>'+visitClientId+'<fdfd>'+visit_type+'<fdfd>'+scheduled_date+'<fdfd>'+marketInfoStr+'<fdfd>'+productOrderStr+'<fdfd>'+marchandizingInfoStr+'<fdfd>'+campaign_str+'<fdfd>'+lat+'<fdfd>'+longitude+'<fdfd>'+imageName+'<fdfd>'+localStorage.payment_mode+'<fdfd>'+chemist_feedback+'<rdrd>'
	
	
	
	
	localStorage.visit_market_show=market_name
	var market_Id=market_name.split('|')[1];

	
	localStorage.visit_client_show=visit_client
	localStorage.visit_client=visitClientId
	
	localStorage.productOrderStr=productOrderStr
	$("#chemist_feedback").val(chemist_feedback);
	
	
	$(".market").html(market_name);								
	$(".visit_type").html(visit_type);								
	$(".s_date").html(scheduled_date);
	$(".visit_client").html(visit_client);
	
	getOrder_load();
	cart_data();
	
	
	
	if (localStorage.visit_location_flag!='YES'){
		//alert (localStorage.visit_location);
		$("#visit_location").hide();
		$("#visit_submit").show();
		
	}
	if (localStorage.delivery_date_flag!='YES'){
		$("#delivery_date_div").hide();
	}
	if (localStorage.payment_date_flag!='YES'){
		$("#payment_date_div").hide();
	}
	if (localStorage.payment_mode_flag!='YES'){
		$("#payment_mode_div").hide();
	}
	
	
	
	localStorage.saved_data_submit=1;
	
	if (localStorage.productOrderStr==""){
		var url = "#page_visit";
	}
	else{
		var url = "#page_cart";	
	}
	$.mobile.navigate(url);	
	
	
}





//-----------------------------Visit Save End


//====================info button=========

function showInfo(){
//$("#errorChkVSubmit").text(localStorage.base_url+'showInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	//alert (localStorage.visit_client);
	$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'showInfo?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,
				 success: function(result) {
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){							
								$("#showInfo").html("<div width='70%'>"+resultArray[1]+"</div>");
								var url = "#page_show_info";	
								$.mobile.navigate(url);	
								
								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax
	
}
//====================Last Visit=========

function lastVisit(){
	//$("#errorChkVSubmit").text(localStorage.base_url+'lastVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client);
	//alert (localStorage.visit_client);
	
	$("#submit_buttons").hide();
	$("#footer_button").hide();
	$("#wait_image_visit_submit").show();
	$("#visit_location").hide();
	
	
	//alert ('asdasd')
	
	$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'lastVisit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client='+localStorage.visit_client,
				 success: function(result) {
						if (result==''){
							$("#submit_buttons").show();
							$("#footer_button").show();
							$("#visit_location").show();
							$("#wait_image_visit_submit").hide();
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){	
							
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
								//alert ("sfdg");						
								var result_string=resultArray[1];
 

								
								$("#lastVisit").html("<div width='70%'>"+resultArray[1]+"</div>");
								
								
								
								
								var url = "#page_last_visit";	
								$.mobile.navigate(url);	
								
								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
							$("#wait_image_visit_submit").hide();
							$("#submit_buttons").show();
							$("#footer_button").show();	
							$("#visit_location").show();
						}
					  },
				  error: function(result) {	
				  	  $("#submit_buttons").show();
					  $("#footer_button").show();
					  $("#visit_location").show();
					  $("#wait_image_visit_submit").hide();
					  $("#checkLocation").html('Network Timeout. Please try again.');		
					  var url = "#page_visit";	
					  $.mobile.navigate(url);	
				  }
			 });//end ajax
	
	
}
function another(){
	//alert (localStorage.set_flag_api)
	if (localStorage.set_flag_api=='REQUISITION'){
		 var url = "#page_rec_depot";	
		 $.mobile.navigate(url);	
		 location.reload();
	}
	else{
		 var url = "#page_market_ret";	
		 $.mobile.navigate(url);	
	}
}
function order_bak(){
	//alert (localStorage.set_flag_api)
	if (localStorage.set_flag_api=='REQUISITION'){
		 var url = "#page_rec_depot";	
		 $.mobile.navigate(url);	
		 addDepotList();
		 //location.reload();
	}
	else{
		 var url = "##page_visi";	
		 $.mobile.navigate(url);	
	}
}
