import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

//get all unique rooms
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value] ))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice,
        minSize, 
        maxSize, 
        breakfast, 
        pets
    }  =  context

    //get unique types
    let types = getUnique(rooms, 'type');

    //add all
    types= ['all', ...types]

    //map to jsx
    types = types.map((item, index) =>{
            return( <option value={item} 
                                    key = {index}>
                                    {item}
                        </option>
            );
    });
    let people = getUnique(rooms, 'capacity');
    people = people.map((item,index) => {
        return(
            <option key={index} 
                          value={item}>
                              {item}
            </option>
        )
    })

    return (
        <section className = "filter-container">
           <Title title='search rooms' />
                <form className="filter-form">
                    {/* select type */}
                    <div htmlFor="form-group">
                        <label htmlFor="type" >Room Type</label>
                        <select name = "type" 
                                    id="type" 
                                    value = {type} 
                                    className="form-control" 
                                    onChange = {handleChange} >
                                    {types}
                            </select>
                    </div>
                    {/* guest */}
                    <div htmlFor="form-group">
                        <label htmlFor="capacity" >Guest</label>
                        <select name = "capacity" 
                                    id="capacity" 
                                    value = {capacity} 
                                    className="form-control" 
                                    onChange = {handleChange} >
                                    {people}
                            </select>
                    </div>

                 {/* price */}
                
            <div className="form-group">
                <lable htmlFor="price">
                Room Price ${price}
                </lable>
                <input type="range" 
                            name ="price" 
                            min={minPrice} 
                            max={maxPrice}
                            id ="price"
                            value={price}
                            onChange = {handleChange}
                            className="form-control">
                    </input>
            </div>

            {/* size */}
            <div className="form-group">
                <lable className="size">Room Size</lable>
               <div className="size-inputs">
               <input type="number" 
                            name ="minSize" 
                            id ="size"
                            value={minSize}
                            onChange = {handleChange}
                            className="size-input">
                    </input>
                    <input type="number" 
                            name ="maxSize" 
                            id ="size"
                            value={maxSize}
                            onChange = {handleChange}
                            className="size-input">
                    </input>
               </div>
            </div>

            {/* filter by extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" 
                                name="breakfast" 
                                id="breakfast" 
                                // checked={breakfast}
                                onChange={handleChange} 
                    />
                    <lable htmlFor="breakfast"> Breakfast</lable>
                </div>
                <div className="single-extra">
                    <input type="checkbox" 
                                name="pets" 
                                id="pets" 
                                // checked={pets}
                                onChange={handleChange} 
                                />
                    <lable htmlFor="pets"> Pets</lable>
                </div>
            </div>

                </form>
        </section>
    )
}
