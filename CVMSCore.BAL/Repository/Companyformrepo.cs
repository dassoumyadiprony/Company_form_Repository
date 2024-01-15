using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CVMSCore.BAL.Models.Company;

namespace CVMSCore.BAL.Repository
{
    public class Companyformrepo
    {
        private SqlConnection _conn;
        private DapperConnection dapper = new DapperConnection(ConnectionFile.Connection_ANTSDB);

        //dapper connection for connecting connection with the help of connection string...........

        public int SaveDeatils(Mycompanyform ct)
        {
            int num = 0;
            try
            {
                DynamicParameters dynamicParameters1 = new DynamicParameters();

                dynamicParameters1.Add("Companyname", (object)ct.Companyname, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Companyemail", (object)ct.Companyemail, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());

                dynamicParameters1.Add("Gstno", (object)ct.Gstno, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Tinno", (object)ct.Tinno, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Phoneno", (object)ct.Phoneno, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Faxno", (object)ct.Faxno, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());

                dynamicParameters1.Add("Corporateaddress", (object)ct.Corporateaddress, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Branchaddress", (object)ct.Branchaddress, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Websiteurl", (object)ct.Websiteurl, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Registrationdate", (object)ct.Registrationdate, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Registrationaddress", (object)ct.Registrationaddress, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Name", (object)ct.Name, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Phone", (object)ct.Phone, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("Email", (object)ct.Email, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());

                dynamicParameters1.Add("Remarks", (object)ct.Remarks, new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("USERTYPE", (object)"", new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("SUBUSERTYPE", (object)"", new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());
                dynamicParameters1.Add("USERID", (object)"", new DbType?(), new ParameterDirection?(), new int?(), new byte?(), new byte?());

                this._conn = this.dapper.GetConnection();
                DapperConnection.OpenConnection(this._conn);
                SqlConnection conn = this._conn;
                DynamicParameters dynamicParameters2 = dynamicParameters1;
                CommandType? nullable1 = new CommandType?(CommandType.StoredProcedure);
                int? nullable2 = new int?();
                CommandType? nullable3 = nullable1;
                string? str = SqlMapper.ExecuteScalar((IDbConnection)conn, "SAF_postcompanydetails", (object)dynamicParameters2, (IDbTransaction)null, nullable2, nullable3).ToString();
                DapperConnection.CloseConnection(this._conn);
                num = Convert.ToInt32(str);
            }
            catch (Exception ex)
            {

            }
            return num;
        }
    }
}
