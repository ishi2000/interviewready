var questions = [
    "What is DBMS and what is its utility? Explain RDBMS with example", 
    "Mention the issues with traditional file-based systems that make DBMS a better choice?", 
    "Explain a few advantages of a DBMS.", 
    "Explain different languages present in DBMS.", 
    "What is Data Warehousing?",
    "What is meant by an entity-relationship (E-R) model? Explain the terms Entity, Entity Type, and Entity Set in DBMS",
    "Explain the difference between the DELETE and TRUNCATE command in a DBMS.", 
    "What is a lock. Explain the major difference between a shared lock and an exclusive lock during a transaction in a database.    ", 
    " Explain different types of keys in a database.", 
    "Explain the difference between a 2-tier and 3-tier architecture in a DBMS.",
    "What is an IPv4 address? What are the different classes of IPv4?", 
    
];

function newQuestion() {
    var randomNumber = Math.floor(Math.random() * (questions.length));
    document.getElementById('questionDisplay').innerHTML = questions[randomNumber];
}