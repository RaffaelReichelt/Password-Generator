# password-generator
password-generator is a tool to generate passwords from commandline or as a library.

## install
```npm install password-generator```

## usage
password-generator [options]
Without Options it woll generate a password with lowercase letters and numbers grouped by 4 letters and seperated with a *-* with a length of 14.

````
Options:
  --help           Hilfe anzeigen                                      [boolean]
  --version        Version anzeigen                                    [boolean]
  -m, --max        Set password length                                    [Zahl]
  -t, --tupel      Set group length                                       [Zahl]
  -s, --seperator  set group seperator - 0 for none                       [Zahl]
  -l, --lowercase  Include lowercase letters          [boolean] [Standard: true]
  -u, --uppercase  include upercase letters          [boolean] [Standard: false]
  -n, --numbers    Include numbers                    [boolean] [Standard: true]
  -x, --specials   Include special letters           [boolean] [Standard: false]
  ```
  