#!/usr/bin/env zx

let start = 10000,
  end = 10000 + 12000;

const getValues = res => {
  const result = {};
  result.name = res.name;
  for (let trait of res.traits) {
    if (trait.trait_type === 'Land Count') {
      result.land = trait.value;
    }

    if (trait.trait_type === 'Status') {
      result.status = trait.value === 'ok' ? true : false;
    }
  }
  return result;
};

let all = [];

for (let i = start; i < end; i++) {
  let result = await fetch(`https://worldoffairy.com/token/${i}`);

  let values = await result.json();
  all.push(getValues(values));
}

fs.writeFileSync(`./out.json`, JSON.stringify(all));
