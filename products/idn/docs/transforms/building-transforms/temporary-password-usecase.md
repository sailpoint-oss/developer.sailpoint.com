---
id: temporary-password-usecase
slug: /transforms/temporary-password-usecase
---
# Complex Transform - Generate Temporary Password

## Overview

In this guide you will learn how to create a nested transform in order to generate a temporary password from a user's attributes.

- The authoritative source's data feed includes both a first_name and a last_name field for every worker

- A hire date is provided within the authoritative source data feed: the hire_date field is provided for every worker, and is in the format of YYYY-MM-DD

For an initial (temporary) password, we want to set a static value that is driven off a formula which could be communicated to the new hire via email:

- The first character is the user's first initial, in lowercase
- The user's last name should be provided next, with the first character uppercased.
- The user's two-digit start month should be next (from the user's hire date)
- The last part of the password should be a static string: "RstP\*!7"

## Create the example source from a deliminated file

The CSV file we will upload to create our source for testing this transform

| id     | email                        | first_name | last_name | hire_date  |
| ------ | ---------------------------- | ---------- | --------- | ---------- |
| 100010 | lewis.hamilton@sailpoint.com | Lewis      | hamilton  | 2020-12-12 |
| 100011 | frank.williams@sailpoint.com | Frank      | Williams  | 2020-07-10 |
| 100012 | paddy.lowe@sailpoint.com     | Paddy      | Lowe      | 2020-09-20 |

To upload your CSV source navigate to **Admin** > **Connections** > **Sources** and click Create New.

Fill in the form to create a source:

![Create Source](./img/create_source.png)

The source configuration workflow will appear, keep all the default settings and under **Review and Finish** on the left hand side, click **Exit Configuration**.

## Upload Schema and Accounts

In your newly created source, navigate to **Import Data** > **Account Schema**. Under **Options** click, **Upload Schema**. Locate the CSV file from earlier in this document.

Once your account schema is uploaded you will see your available attributes to use within the transform.

![Create Source](./img/account_schema.png)

Now we can upload our accounts. Navigate to **Import Data** > **Import Accounts** > **Import Data**. Locate the CSV file from earlier in this document.

![Account Summary](./img/account_summary.png)

## Create an Identity Profile for the Source

Create an Identity Profile for your source. Navigate to **Admin** > **Identities** > **Identity Profiles** and click **New**.

![Identity Profile](./img/account_summary.png)

Fill out the form and choose the source created earlier.

## Creating the transform

Now lets look at creating the transform for generating the user's temporary password. We will use a couple different operations in order to get the result we are looking for. We are going to break it out into pieces and then put it all together at the end. The [static transform](./operations/static.md) will be our main transform, we will use nested transforms to create each part of the password and use those variables created in the final value.

### The first character is the user's first initial, in lowercase

The first part of the password is the users first intitial in lowercase. We can create that attribute below using the [substring operation](./operations/substring.md) to get the first initial, then passing that as input into the [lower operation](./operations/lower.md). In this example the variable will be named `firstInitialLowercase` to use later in our static string.

**First Initial Variable**

```json
"firstInitialLowercase": {
      "type": "lower",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "first_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    }
```

**Transform Body**

```json
{
  "name": "Temporary Password Transform",
  "type": "static",
  "attributes": {
    "firstInitialLowercase": {
      "type": "lower",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "first_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "value": "$firstInitialLowercase"
  }
}
```

### The user's last name should be provided next, with the first character uppercased

Adding to the transform, we can create a variable for the first character of the last name. We can do this using the [substring operation](./operations/substring.md) and the [upper operation](./operations/upper.md). Once we have the variable `lastInitialUppercase` created we can add that to the end of the static string in the value key.

**Last Initial Variable**

```json
"lastInitialUppercase": {
      "type": "upper",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "last_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    }
```

**Transform Body** 

```json
{
  "name": "Temporary Password Transform",
  "type": "static",
  "attributes": {
    "firstInitialLowercase": {
      "type": "lower",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "first_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "lastInitialUppercase": {
      "type": "upper",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "last_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "value": "$firstInitialLowercase$lastInitialUppercase"
  }
}
```

We also need the end of the last name without the first character we already have capitilized from the last step. We can get that by using the substring method and only providing the begin key, which will return everything after the index you specify.

**Last Name Variable**

```json
    "endOfLastName": {
      "type": "substring",
      "attributes": {
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "last_name",
            "sourceName": "Example CSV Source"
          }
        },
        "begin": 1
      }
    }
```

**Transform Body**

```json
{
  "name": "Temporary Password Transform",
  "type": "static",
  "attributes": {
    "firstInitialLowercase": {
      "type": "lower",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "first_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "lastInitialUppercase": {
      "type": "upper",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "last_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "endOfLastName": {
      "type": "substring",
      "attributes": {
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "last_name",
            "sourceName": "Example CSV Source"
          }
        },
        "begin": 1
      }
    },
    "value": "$firstInitialLowercase$lastInitialUppercase$endOfLastName"
  }
}
```

### The user's two-digit start month should be next, taken from the hire_date

To get the two digit start month we will use the [split operation](./operations/split.md). The `hire_date` is in the format of `YYYY-MM-DD` in order to get the month we split on `-` and set the index to return as 1.

**Hire Date Month Variable**

```json
"hireDateMonth": {
      "type": "split",
      "attributes": {
        "delimiter": "-",
        "index": "1",
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "hire_date",
            "sourceName": "Example CSV Source"
          }
        }
      }
    }
```

**Transform Body**

```json
{
  "name": "Temporary Password Transform",
  "type": "static",
  "attributes": {
    "firstInitialLowercase": {
      "type": "lower",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "first_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "lastInitialUppercase": {
      "type": "upper",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "last_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "endOfLastName": {
      "type": "substring",
      "attributes": {
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "last_name",
            "sourceName": "Example CSV Source"
          }
        },
        "begin": 1
      }
    },
    "hireDateMonth": {
      "type": "split",
      "attributes": {
        "delimiter": "-",
        "index": "1",
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "hire_date",
            "sourceName": "Example CSV Source"
          }
        }
      }
    },
    "value": "$firstInitialLowercase$lastInitialUppercase$endOfLastName$hireDateMonth"
  }
}
```

### The last part of the password should be a static string: "RstP\*!7"

To add the final part of the password which is just the static string `RstP\*!7` we will use the static operation.

**Static String Variable**

```json
"staticString": {
      "type": "static",
      "attributes": {
        "value": "RstP*!7"
      }
    }
```

---

## Completed Transform

```json
{
  "name": "Temporary Password Transform",
  "type": "static",
  "attributes": {
    "firstInitialLowercase": {
      "type": "lower",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "first_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "lastInitialUppercase": {
      "type": "upper",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "last_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "endOfLastName": {
      "type": "substring",
      "attributes": {
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "last_name",
            "sourceName": "Example CSV Source"
          }
        },
        "begin": 1
      }
    },
    "hireDateMonth": {
      "type": "split",
      "attributes": {
        "delimiter": "-",
        "index": "1",
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "hire_date",
            "sourceName": "Example CSV Source"
          }
        }
      }
    },
    "staticString": {
      "type": "static",
      "attributes": {
        "value": "RstP*!7"
      }
    },
    "value": "$firstInitialLowercase$lastInitialUppercase$endOfLastName$hireDateMonth$staticString"
  }
}
```

## Verifying the transform

To verify our transform is working lets create the transfrom through the REST API.

In order to call the APIs for transforms you will need a personal access token and the name of your tenant to provide with the request. To retrieve a personal access token, see [Personal Access Tokens](../authentication.md#personal-access-tokens). To get the name of your tenant, see [Finding Your Organization Tenant Name](../getting_started.md#finding-your-org-tenant-name)

```bash
curl --location --request POST 'https://{tenant}.api.identitynow.com/v3/transforms' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data-raw '{
  "name": "Temporary Password Transform",
  "type": "static",
  "attributes": {
    "firstInitialLowercase": {
      "type": "lower",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "first_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "lastInitialUppercase": {
      "type": "upper",
      "attributes": {
        "input": {
          "type": "substring",
          "attributes": {
            "input": {
              "type": "accountAttribute",
              "attributes": {
                "attributeName": "last_name",
                "sourceName": "Example CSV Source"
              }
            },
            "begin": 0,
            "end": 1
          }
        }
      }
    },
    "endOfLastName": {
      "type": "substring",
      "attributes": {
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "last_name",
            "sourceName": "Example CSV Source"
          }
        },
        "begin": 1
      }
    },
    "hireDateMonth": {
      "type": "split",
      "attributes": {
        "delimiter": "-",
        "index": "1",
        "input": {
          "type": "accountAttribute",
          "attributes": {
            "attributeName": "hire_date",
            "sourceName": "Example CSV Source"
          }
        }
      }
    },
    "staticString": {
      "type": "static",
      "attributes": {
        "value": "RstP*!7"
      }
    },
    "value": "$firstInitialLowercase$lastInitialUppercase$endOfLastName$hireDateMonth$staticString"
  }
}'
```

Once created successfully you can apply the new transform and preview what the password will look like for each user.

Log in to your IdentityNow Tenant and navigate to **Admin** > **Identities** > **Identity Profiles** and click into the name of the profile you created earlier, Transform Example. Click into the **Mappings** tab, scroll to the bottom and click, add new attribute. Name the attribute `Temporary Password`. In order to save the new mappings you will need to fill out the id, email, first name and last name mappings as well.

![Attribute Mapping](./img/temporary_password_attribute_mapping.png)

After saving the mappings, click the preview button in the top right of the page and select the Lewis Hamilton Identity under **Identity to Preview**. The temporaryPassword shows up as `lHamilton12RstP*!7`.

Table of values with the temporary password for each user

| id     | email                        | first_name | last_name | hire_date  | temporaryPassword  |
| ------ | ---------------------------- | ---------- | --------- | ---------- | ------------------ |
| 100010 | lewis.hamilton@sailpoint.com | Lewis      | hamilton  | 2020-12-12 | lHamilton12RstP*!7 |
| 100011 | frank.williams@sailpoint.com | Frank      | Williams  | 2020-07-10 | fWilliams07RstP*!7 |
| 100012 | paddy.lowe@sailpoint.com     | Paddy      | Lowe      | 2020-09-20 | pLowe09RstP*!7     |

## Next Steps

Looking for more examples or having trouble with one of your complex transforms? Reach out in the [Developer Community Forum](https://developer.sailpoint.com/discuss/).