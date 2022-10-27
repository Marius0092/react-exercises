import { useMemo } from "react";

const list = [
    {name: "Jane", id:1, age:20},
    
    {name: "Jimmy", id:2, age: 40},

    {name: "Patrick", id:3, age: 15},
];

export function FilteredList() {
    const persons = useMemo(() => list.map((person) => person.age >= 18 && <li key={person.id}>{person.name} - {person.age}</li>), [])


    return (
        <div>
            {persons}
        </div>
    )
}
