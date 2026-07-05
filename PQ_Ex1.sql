CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
INSERT INTO Customers VALUES (1,'Haritha',65,15000,'FALSE');
INSERT INTO Customers VALUES (2,'Rahul',45,9000,'FALSE');
INSERT INTO Customers VALUES (3,'Anjali',70,20000,'FALSE');

COMMIT;
INSERT INTO Loans VALUES (101,1,8,SYSDATE+20);
INSERT INTO Loans VALUES (102,2,9,SYSDATE+40);
INSERT INTO Loans VALUES (103,3,7,SYSDATE+10);

COMMIT;
SELECT * FROM Customers;
SELECT * FROM Loans;
DECLARE
CURSOR c1 IS
SELECT CustomerID, Age
FROM Customers;
BEGIN
FOR c IN c1 LOOP
IF c.Age > 60 THEN
UPDATE Loans
SET InterestRate = InterestRate - 1
WHERE CustomerID = c.CustomerID;
END IF;
END LOOP;
COMMIT;
END;
/
SELECT * FROM Loans;
DECLARE
CURSOR c2 IS
SELECT CustomerID, Balance
FROM Customers;
BEGIN
FOR c IN c2 LOOP
IF c.Balance > 10000 THEN
UPDATE Customers
SET IsVIP='TRUE'
WHERE CustomerID=c.CustomerID;
END IF;
END LOOP;
COMMIT;
END;
/
SELECT * FROM Customers;



DECLARE
CURSOR c3 IS
SELECT CustomerID, LoanID, DueDate
FROM Loans
WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
FOR c IN c3 LOOP
DBMS_OUTPUT.PUT_LINE('Reminder: Customer '
|| c.CustomerID ||
' Loan '
|| c.LoanID ||
' is due on '
|| TO_CHAR(c.DueDate,'DD-MON-YYYY'));
END LOOP;
END;
/
