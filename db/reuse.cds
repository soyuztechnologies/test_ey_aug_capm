namespace reuse;

//just like data elements in abap
type Guid : String(32);

//like a structure in SE11
aspect address{
    houseNo: String(20);
    street: String(32);
    city: String(48);
}
