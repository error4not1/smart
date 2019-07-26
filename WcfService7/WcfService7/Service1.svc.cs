using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;



namespace WcfService7
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : IService1
    {
       
            public SqlConnection getconnection()
             {
            SqlConnection sqlconn = new SqlConnection();
            string connstring = ConfigurationManager.ConnectionStrings["prods"].ConnectionString;
            sqlconn.ConnectionString = connstring;
            return sqlconn;
               }

            public string AddCustomer(registration newuser)
            {
                string mess;
                SqlConnection con = getconnection();
                con.Open();
                    SqlCommand cmd = new SqlCommand("insert into Customers(name,emailId,mobileNumber,password,addressLine1,addressLine2,city,pincode,state,landmark,dob,gender)values(@name,@emailId,@mobileNumber,@password,@addressLine1,@addressLine2,@city,@pincode,@state,@landmark,@dob,@gender)", con);
                    cmd.Parameters.AddWithValue("@name", newuser.name);
                    cmd.Parameters.AddWithValue("@emailId", newuser.emailId);
                    cmd.Parameters.AddWithValue("@mobileNumber", newuser.mobileNumber);
                    cmd.Parameters.AddWithValue("@password", newuser.password);
                    cmd.Parameters.AddWithValue("@addressLine1", newuser.addressLine1);
                    cmd.Parameters.AddWithValue("@addressLine2", newuser.addressLine2);
                    cmd.Parameters.AddWithValue("@city", newuser.city);
                    cmd.Parameters.AddWithValue("@pincode", newuser.pincode);
                    cmd.Parameters.AddWithValue("@state", newuser.state);
                    cmd.Parameters.AddWithValue("@landmark", newuser.landmark);
                    cmd.Parameters.AddWithValue("@dob", newuser.dob);
                    cmd.Parameters.AddWithValue("@gender", newuser.gender);
                    int result = cmd.ExecuteNonQuery();
                    if (result == 1)
                    {
                        mess = newuser.name + "details inserted";

                    }
                    else
                    {
                        mess = newuser.name + "details not inserted";
                    }
                    return mess;
            }
    }
}
