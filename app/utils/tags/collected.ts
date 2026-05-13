import animal from './animal'
import humanoid from './humanoid'
import ignore from './ignore'
import { age, change, child_birth, decoration, hardcode, innocent } from './extreme'

console.log(
  'item_len',
  ignore.length +
    animal.length +
    humanoid.length +
    age.length +
    change.length +
    child_birth.length +
    decoration.length +
    hardcode.length +
    innocent.length,
)

export const lookup: Record<string, string[]> = Object.create(null)

for (const key of animal) {
  lookup[key] = ['#3377FF', '#3377FF']
}

for (const key of humanoid) {
  lookup[key] = ['#a50036', '#a50036']
}

for (const key of age) {
  lookup[key] = ['#5ea500', '#5ea500']
}

for (const key of change) {
  lookup[key] = ['#c27aff', '#c27aff']
}

for (const key of child_birth) {
  lookup[key] = ['#5ee9b5', '#5ee9b5']
}

for (const key of decoration) {
  lookup[key] = ['#00786f', '#00786f']
}

for (const key of hardcode) {
  lookup[key] = ['#fb2c36', '#fb2c36']
}

for (const key of innocent) {
  lookup[key] = ['#05df72', '#05df72']
}
