namespace demo;
using { reuse } from './reuse';
using { cuid, temporal, managed, Country } from '@sap/cds/common';


context master {
    entity student: reuse.address {
        key id: reuse.Guid;
        name: String(80);
        gender: String(2);
        class: Association to standard;
        country: Country
    }

    entity standard {
        key id: reuse.Guid;
        specialization: String(80);
        semester: String(80);
        hod: String(40);
    }

    entity books{
        key id: reuse.Guid;
        bookName: localized String(80);
        author: String(80);
    }
}

context transaction {
    entity Sub : cuid, managed, temporal {
        book: Association to master.books;
        student: Association to master.student;
    }
}
