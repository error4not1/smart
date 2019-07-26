using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace WcfService7
{
    [DataContract]
    public class registration
    {
        [DataMember]
        public string name { get; set; }
        [DataMember]
        public string emailId { get; set; }
        [DataMember]
        public string mobileNumber { get; set; }
        [DataMember]
        public string password { get; set; }
        [DataMember]
        public string addressLine1 { get; set; }
        [DataMember]
        public string addressLine2 { get; set; }
        [DataMember]
        public string city { get; set; }
        [DataMember]
        public string state { get; set; }
        [DataMember]
        public string landmark { get; set; }
        [DataMember]
        public string dob { get; set; }
        [DataMember]
        public string gender { get; set; }
        [DataMember]
        public string pincode{ get; set; }
    }
  
       
}