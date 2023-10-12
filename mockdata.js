function getInvoices(){
  return invoices;
}
function getWeather(){
  return weather;
}
let weather = [
  {
    "Month": "Sep2022",
    "Historical Avg": 76,
    "Actual Avg": 78
  },
  {
    "Month": "Oct2022",
    "Historical Avg": 54,
    "Actual Avg": 54
  },
  {
    "Month": "Nov2022",
    "Historical Avg": 48,
    "Actual Avg": 47
  },
  {
    "Month": "Dec2022",
    "Historical Avg": 41,
    "Actual Avg": 37
  },
  {
    "Month": "Jan2023",
    "Historical Avg": 39,
    "Actual Avg": 41
  },
  {
    "Month": "Feb2023",
    "Historical Avg": 54,
    "Actual Avg": 50
  },
  {
    "Month": "Mar2023",
    "Historical Avg": 45,
    "Actual Avg": 45
  },
  {
    "Month": "Apr2023",
    "Historical Avg": 61,
    "Actual Avg": 65
  },
  {
    "Month": "May2023",
    "Historical Avg": 73,
    "Actual Avg": 70
  },
  {
    "Month": "Jun2023",
    "Historical Avg": 69,
    "Actual Avg": 72
  },
  {
    "Month": "Jul2023",
    "Historical Avg": 79,
    "Actual Avg": 83
  },
  {
    "Month": "Aug2023",
    "Historical Avg": 88,
    "Actual Avg": 86
  },
  {
    "Month": "Sep2023",
    "Historical Avg": 72,
    "Actual Avg": 75
  }
 ];

   let invoices = [
    {
      "invoice_number": 80599,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": true,
      "outage_reason": "HURRICANE",
      "meter_reading_start": 117850,
      "meter_reading_end": 119176,
      "kwh_used": 1326,
      "usage_cost": 145.86,
      "Fees": 18,
      "total_amount_due": 163.86,
      "service_period_ending": "9/30/2022",
      "payment_due_date": "10/31/2022",
      "payment_date": "11/11/2022",
      "late_fee": 3.2772,
      "payment_amount": 167.1372,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 81516,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 119176,
      "meter_reading_end": 120094,
      "kwh_used": 918,
      "usage_cost": 100.98,
      "Fees": 18,
      "total_amount_due": 118.98,
      "service_period_ending": "10/31/2022",
      "payment_due_date": "11/30/2022",
      "payment_date": "11/28/2022",
      "late_fee": 0,
      "payment_amount": 118.98,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 82450,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 120094,
      "meter_reading_end": 120893,
      "kwh_used": 799,
      "usage_cost": 87.89,
      "Fees": 18,
      "total_amount_due": 105.89,
      "service_period_ending": "11/30/2022",
      "payment_due_date": "12/31/2022",
      "payment_date": "12/15/2022",
      "late_fee": 0,
      "payment_amount": 105.89,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 83258,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 120893,
      "meter_reading_end": 121522,
      "kwh_used": 629,
      "usage_cost": 69.19,
      "Fees": 18,
      "total_amount_due": 87.19,
      "service_period_ending": "12/31/2022",
      "payment_due_date": "1/31/2023",
      "payment_date": "1/15/2023",
      "late_fee": 0,
      "payment_amount": 87.19,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 84342,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": true,
      "outage_reason": "ICE",
      "meter_reading_start": 121522,
      "meter_reading_end": 122219,
      "kwh_used": 697,
      "usage_cost": 76.67,
      "Fees": 18,
      "total_amount_due": 94.67,
      "service_period_ending": "1/31/2023",
      "payment_due_date": "2/28/2023",
      "payment_date": "3/1/2023",
      "late_fee": 1.8934,
      "payment_amount": 96.5634,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 85460,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": true,
      "outage_reason": "ICE",
      "meter_reading_start": 122219,
      "meter_reading_end": 123069,
      "kwh_used": 850,
      "usage_cost": 93.5,
      "Fees": 18,
      "total_amount_due": 111.5,
      "service_period_ending": "2/28/2023",
      "payment_due_date": "3/31/2023",
      "payment_date": "4/5/2023",
      "late_fee": 2.23,
      "payment_amount": 113.73,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 86564,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 123069,
      "meter_reading_end": 123834,
      "kwh_used": 765,
      "usage_cost": 84.15,
      "Fees": 18,
      "total_amount_due": 102.15,
      "service_period_ending": "3/31/2023",
      "payment_due_date": "4/30/2023",
      "payment_date": "4/13/2023",
      "late_fee": 0,
      "payment_amount": 102.15,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 87567,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 123834,
      "meter_reading_end": 124939,
      "kwh_used": 1105,
      "usage_cost": 121.55,
      "Fees": 18,
      "total_amount_due": 139.55,
      "service_period_ending": "4/30/2023",
      "payment_due_date": "5/31/2023",
      "payment_date": "6/11/2023",
      "late_fee": 2.791,
      "payment_amount": 142.341,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 88758,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": true,
      "outage_reason": "VEHICULAR COLLISION",
      "meter_reading_start": 124939,
      "meter_reading_end": 126129,
      "kwh_used": 1190,
      "usage_cost": 130.9,
      "Fees": 18,
      "total_amount_due": 148.9,
      "service_period_ending": "5/31/2023",
      "payment_due_date": "6/30/2023",
      "payment_date": "6/21/2023",
      "late_fee": 0,
      "payment_amount": 148.9,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 89826,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 126129,
      "meter_reading_end": 127353,
      "kwh_used": 1224,
      "usage_cost": 134.64,
      "Fees": 18,
      "total_amount_due": 152.64,
      "service_period_ending": "6/30/2023",
      "payment_due_date": "7/31/2023",
      "payment_date": "7/16/2023",
      "late_fee": 0,
      "payment_amount": 152.64,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 90908,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 127353,
      "meter_reading_end": 128764,
      "kwh_used": 1411,
      "usage_cost": 155.21,
      "Fees": 18,
      "total_amount_due": 173.21,
      "service_period_ending": "7/31/2023",
      "payment_due_date": "8/31/2023",
      "payment_date": "9/4/2023",
      "late_fee": 3.4642,
      "payment_amount": 176.6742,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 92058,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 128764,
      "meter_reading_end": 130226,
      "kwh_used": 1462,
      "usage_cost": 160.82,
      "Fees": 18,
      "total_amount_due": 178.82,
      "service_period_ending": "8/31/2023",
      "payment_due_date": "9/30/2023",
      "payment_date": "9/23/2023",
      "late_fee": 0,
      "payment_amount": 178.82,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 93093,
      "customer_id": 7133,
      "payment_status": "unpaid",
      "late_payment": false,
      "outage_experienced": false,
      "outage_reason": "",
      "meter_reading_start": 130226,
      "meter_reading_end": 131501,
      "kwh_used": 1275,
      "usage_cost": 140.25,
      "Fees": 18,
      "total_amount_due": 158.25,
      "service_period_ending": "9/30/2023",
      "payment_due_date": "10/31/2023",
      "payment_date": "",
      "late_fee": null,
      "payment_amount": null,
      "payment_method": ""
    }
   ];

   module.exports = { getInvoices, getWeather };