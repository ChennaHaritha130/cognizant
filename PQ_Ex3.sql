CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    AccountType VARCHAR2(20),
    Balance NUMBER
);
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER
);
INSERT INTO Accounts VALUES (101,'Haritha','Savings',10000);
INSERT INTO Accounts VALUES (102,'Rahul','Savings',15000);
INSERT INTO Accounts VALUES (103,'Anjali','Current',20000);
INSERT INTO Accounts VALUES (104,'Kiran','Savings',5000);

COMMIT;

INSERT INTO Employees VALUES (1,'Ravi','IT',50000);
INSERT INTO Employees VALUES (2,'Priya','HR',45000);
INSERT INTO Employees VALUES (3,'Arun','IT',60000);

COMMIT;
SELECT * FROM Accounts;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/
BEGIN
    ProcessMonthlyInterest;
END;
/
SELECT * FROM Accounts;
SELECT * FROM Employees;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    dept IN VARCHAR2,
    bonusPercent IN NUMBER
)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * bonusPercent / 100)
    WHERE Department = dept;

    COMMIT;
END;
/
BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/
SELECT * FROM Employees;
SELECT * FROM Accounts;
CREATE OR REPLACE PROCEDURE TransferFunds
(
    fromAccount IN NUMBER,
    toAccount IN NUMBER,
    amount IN NUMBER
)
AS
    sourceBalance NUMBER;
BEGIN
    SELECT Balance
    INTO sourceBalance
    FROM Accounts
    WHERE AccountID = fromAccount;

    IF sourceBalance >= amount THEN

        UPDATE Accounts
        SET Balance = Balance - amount
        WHERE AccountID = fromAccount;

        UPDATE Accounts
        SET Balance = Balance + amount
        WHERE AccountID = toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

    END IF;
END;
/
BEGIN
    TransferFunds(101,102,2000);
END;
/
SELECT * FROM Accounts;