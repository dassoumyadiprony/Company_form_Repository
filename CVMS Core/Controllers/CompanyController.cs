using CVMSCore.BAL.Models.Company;
using CVMSCore.BAL.Service;
using Microsoft.AspNetCore.Mvc;

namespace CVMS_Core.Controllers
{     
    public class CompanyController : Controller
    {
        Companyformservice service = new Companyformservice();
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Getform()
        {
            return View();
        }

        public JsonResult SaveCompanyDetails(IFormCollection formcollection)
        {
            var result = 0;
            if (formcollection != null)
            {
                Mycompanyform obj = new Mycompanyform();//model object.........             // obj.EmpIdd = Convert.ToInt32(formcollection["EmpIdd"]);
                obj.Companyname = Convert.ToString(formcollection["Companyname"]);
                obj.Companyemail = Convert.ToString(formcollection["Companyemail"]);
                obj.Gstno = Convert.ToString(formcollection["Gstno"]);   
                obj.Tinno = Convert.ToString(formcollection["Tinno"]);
                obj.Phoneno = Convert.ToString(formcollection["Phoneno"]);
                obj.Faxno = Convert.ToString(formcollection["Faxno"]);
                obj.Corporateaddress = Convert.ToString(formcollection["Corporateaddress"]);
                obj.Branchaddress = Convert.ToString(formcollection["Branchaddress"]);
                obj.Websiteurl = Convert.ToString(formcollection["Websiteurl"]);
                obj.Registrationdate = Convert.ToString(formcollection["Registrationdate"]);
                obj.Registrationaddress = Convert.ToString(formcollection["Registrationaddress"]);
                obj.Name = Convert.ToString(formcollection["Name"]);
                obj.Phone = Convert.ToString(formcollection["Phone"]);
                obj.Email = Convert.ToString(formcollection["Email"]);
                obj.Remarks = Convert.ToString(formcollection["Remarks"]);

                
                    result = service.AddForm(obj);

                
            }
            return Json(new { result });

        }
        public IActionResult Chaman(int id)
        {
            return View();
        } 
    }
}




