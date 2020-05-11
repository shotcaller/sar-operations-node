const mongoose = require('mongoose')

const InputSchema = new mongoose.Schema({
    _createdAt: {
        type: String,
        required: true
    },
    input: {
        velocity: {
            type: Number,
            required: [true, 'Please input velocity at LKP'],
            trim: true
        },
        altitude: {
            type: Number,
            required: [true, 'Please input altitude'],
            trim: true
        },
        heading: {
            type: Number,
            required: [true, 'Please input heading'],
            trim: true
        },
        trueCourseStart: {
            trueCourseStartLat: {
                type: Number,
                required: [true, 'Please input correct latitudinal value'],
                trim: true
            },
            trueCourseStartLong: {
                type: Number,
                required: [true, 'Please input correct longitudinal value'],
                trim: true
            }
        },
        trueCourseEnd: {
            trueCourseEndLat: {
                type: Number,
                required: [true, 'Please input correct latitudinal value'],
                trim: true
            },
            trueCourseEndLong: {
                type: Number,
                required: [true, 'Please input correct longitudinal value'],
                trim: true
            }
        },
        lastKnownPosition: {
            lastKnownLat: {
                type: Number,
                required: [true, 'Please input correct latitudinal value'],
                trim: true
            },
            lastKnownLong: {
                type: Number,
                required: [true, 'Please input correct longitudinal value'],
                trim: true
            }
        }
    }
})

module.exports = mongoose.model('inputSchema', InputSchema)