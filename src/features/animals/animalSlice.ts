import {Animal, EMPTY_ANIMAL} from "./Animal";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAnimals} from "./AnimalApi";

export interface AnimalState {
    isLoading: boolean;
    animal: Animal
}

const initialState: AnimalState = {
    isLoading: false,
    animal: EMPTY_ANIMAL
}

export const fetchAnimal = createAsyncThunk(
    'animal/fetchAnimals',
    async () => {
        return await fetchAnimals();
    }
)

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    reducers: {
        setAnimal: (state, action: PayloadAction<Animal>) => {
            state.animal = action.payload;
        }
    },
    extraReducers: (builder) => {

    }
});

export const {setAnimal} = animalSlice.actions;

export default animalSlice.reducer;