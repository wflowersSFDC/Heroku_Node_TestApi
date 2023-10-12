function getInvoices(){
  return invoices;
}
function getWeather(){
  return weather;
}
let weather = [
  {
    "Month": "Sep2022",
    "High": 83,
    "Low": 63,
    "Avg": 76
  },
  {
    "Month": "Oct2022",
    "High": 73,
    "Low": 50,
    "Avg": 54
  },
  {
    "Month": "Nov2022",
    "High": 63,
    "Low": 40,
    "Avg": 48
  },
  {
    "Month": "Dec2022",
    "High": 55,
    "Low": 34,
    "Avg": 41
  },
  {
    "Month": "Jan2023",
    "High": 52,
    "Low": 32,
    "Avg": 39
  },
  {
    "Month": "Feb2023",
    "High": 56,
    "Low": 34,
    "Avg": 54
  },
  {
    "Month": "Mar2023",
    "High": 63,
    "Low": 40,
    "Avg": 45
  },
  {
    "Month": "Apr2023",
    "High": 73,
    "Low": 49,
    "Avg": 61
  },
  {
    "Month": "May2023",
    "High": 80,
    "Low": 58,
    "Avg": 73
  },
  {
    "Month": "Jun2023",
    "High": 87,
    "Low": 66,
    "Avg": 69
  },
  {
    "Month": "Jul2023",
    "High": 91,
    "Low": 70,
    "Avg": 79
  },
  {
    "Month": "Aug2023",
    "High": 89,
    "Low": 69,
    "Avg": 88
  },
  {
    "Month": "Sep2023",
    "High": 82,
    "Low": 60,
    "Avg": 72
  }
 ];

   let invoices = [
    {
      "invoice_number": 80599,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": false,
      "meter_reading_start": 117850,
      "meter_reading_end": 121623,
      "usage_units": 3773,
      "usage_cost": 415.03,
      "Fees": 18,
      "total_amount_due": 433.03,
      "service_period_ending": "9/30/2022",
      "payment_due_date": "10/31/2022",
      "payment_date": "11/11/2022",
      "late_fee": 8.6606,
      "payment_amount": 441.6906,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 81516,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "meter_reading_start": 121623,
      "meter_reading_end": 125070,
      "usage_units": 3447,
      "usage_cost": 379.17,
      "Fees": 18,
      "total_amount_due": 397.17,
      "service_period_ending": "10/31/2022",
      "payment_due_date": "11/30/2022",
      "payment_date": "11/28/2022",
      "late_fee": 0,
      "payment_amount": 397.17,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 82450,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": true,
      "meter_reading_start": 125070,
      "meter_reading_end": 128479,
      "usage_units": 3409,
      "usage_cost": 374.99,
      "Fees": 18,
      "total_amount_due": 392.99,
      "service_period_ending": "11/30/2022",
      "payment_due_date": "12/31/2022",
      "payment_date": "12/15/2022",
      "late_fee": 0,
      "payment_amount": 392.99,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 83258,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "meter_reading_start": 128479,
      "meter_reading_end": 131258,
      "usage_units": 2779,
      "usage_cost": 305.69,
      "Fees": 18,
      "total_amount_due": 323.69,
      "service_period_ending": "12/31/2022",
      "payment_due_date": "1/31/2023",
      "payment_date": "1/15/2023",
      "late_fee": 0,
      "payment_amount": 323.69,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 84342,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": true,
      "meter_reading_start": 131258,
      "meter_reading_end": 134076,
      "usage_units": 2818,
      "usage_cost": 309.98,
      "Fees": 18,
      "total_amount_due": 327.98,
      "service_period_ending": "1/31/2023",
      "payment_due_date": "2/28/2023",
      "payment_date": "3/1/2023",
      "late_fee": 6.5596,
      "payment_amount": 334.5396,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 85460,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": true,
      "meter_reading_start": 134076,
      "meter_reading_end": 137306,
      "usage_units": 3230,
      "usage_cost": 355.3,
      "Fees": 18,
      "total_amount_due": 373.3,
      "service_period_ending": "2/28/2023",
      "payment_due_date": "3/31/2023",
      "payment_date": "4/5/2023",
      "late_fee": 7.466,
      "payment_amount": 380.766,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 86564,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "meter_reading_start": 137306,
      "meter_reading_end": 140154,
      "usage_units": 2848,
      "usage_cost": 313.28,
      "Fees": 18,
      "total_amount_due": 331.28,
      "service_period_ending": "3/31/2023",
      "payment_due_date": "4/30/2023",
      "payment_date": "4/13/2023",
      "late_fee": 0,
      "payment_amount": 331.28,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 87567,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": false,
      "meter_reading_start": 140154,
      "meter_reading_end": 142104,
      "usage_units": 1950,
      "usage_cost": 214.5,
      "Fees": 18,
      "total_amount_due": 232.5,
      "service_period_ending": "4/30/2023",
      "payment_due_date": "5/31/2023",
      "payment_date": "6/11/2023",
      "late_fee": 4.65,
      "payment_amount": 237.15,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 88758,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": true,
      "meter_reading_start": 142104,
      "meter_reading_end": 144439,
      "usage_units": 2335,
      "usage_cost": 256.85,
      "Fees": 18,
      "total_amount_due": 274.85,
      "service_period_ending": "5/31/2023",
      "payment_due_date": "6/30/2023",
      "payment_date": "6/21/2023",
      "late_fee": 0,
      "payment_amount": 274.85,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 89826,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": true,
      "meter_reading_start": 144439,
      "meter_reading_end": 147970,
      "usage_units": 3531,
      "usage_cost": 388.41,
      "Fees": 18,
      "total_amount_due": 406.41,
      "service_period_ending": "6/30/2023",
      "payment_due_date": "7/31/2023",
      "payment_date": "7/16/2023",
      "late_fee": 0,
      "payment_amount": 406.41,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 90908,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": true,
      "outage_experienced": false,
      "meter_reading_start": 147970,
      "meter_reading_end": 150865,
      "usage_units": 2895,
      "usage_cost": 318.45,
      "Fees": 18,
      "total_amount_due": 336.45,
      "service_period_ending": "7/31/2023",
      "payment_due_date": "8/31/2023",
      "payment_date": "9/4/2023",
      "late_fee": 6.729,
      "payment_amount": 343.179,
      "payment_method": "bank transfer"
    },
    {
      "invoice_number": 92058,
      "customer_id": 7133,
      "payment_status": "paid",
      "late_payment": false,
      "outage_experienced": false,
      "meter_reading_start": 150865,
      "meter_reading_end": 152770,
      "usage_units": 1905,
      "usage_cost": 209.55,
      "Fees": 18,
      "total_amount_due": 227.55,
      "service_period_ending": "8/31/2023",
      "payment_due_date": "9/30/2023",
      "payment_date": "9/23/2023",
      "late_fee": 0,
      "payment_amount": 227.55,
      "payment_method": "credit card"
    },
    {
      "invoice_number": 93093,
      "customer_id": 7133,
      "payment_status": "unpaid",
      "late_payment": false,
      "outage_experienced": false,
      "meter_reading_start": 152770,
      "meter_reading_end": 156165,
      "usage_units": 3395,
      "usage_cost": 373.45,
      "Fees": 18,
      "total_amount_due": 391.45,
      "service_period_ending": "9/30/2023",
      "payment_due_date": "10/31/2023",
      "payment_date": "",
      "late_fee": null,
      "payment_amount": null,
      "payment_method": ""
    }
   ];

   module.exports = { getInvoices, getWeather };