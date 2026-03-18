import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import List "mo:core/List";

actor {
  type Admin = Principal;
  type Inquiry = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let admins = List.empty<Admin>();
  let inquiries = List.empty<Inquiry>();

  public shared ({ caller }) func initializeAdmin(admin : Admin) : async () {
    if (admins.isEmpty()) {
      admins.add(admin);
    } else {
      Runtime.trap("Admins have already been initialized. ");
    };
  };

  public query ({ caller }) func isAdmin(admin : Admin) : async Bool {
    admins.contains(admin);
  };

  public shared ({ caller }) func submitInquiry(name : Text, email : Text, message : Text) : async () {
    let newInquiry : Inquiry = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    inquiries.add(newInquiry);
  };

  type QueryInquiry = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public query ({ caller }) func getAllInquiries() : async [QueryInquiry] {
    if (not admins.contains(caller)) {
      Runtime.trap("Only admins are allowed to get all inquiries");
    };
    inquiries.toArray().map(func((inquiry)) { inquiry });
  };
};
