using CVMSCore.BAL.Models.Company;
using CVMSCore.BAL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CVMSCore.BAL.Service
{
    public class Companyformservice
    {
        public int AddForm(Mycompanyform empModel)
        {
            Companyformrepo _repo = new Companyformrepo();
            int num = 102;
            try
            {
                return _repo.SaveDeatils(empModel);


            }
            catch
            {

            }
            return num;
        }

    }
}
