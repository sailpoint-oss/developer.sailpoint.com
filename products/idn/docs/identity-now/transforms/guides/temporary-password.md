---
id: temporary-password
title: Generate Temporary Password
pagination_label: Generate Temporary Password
sidebar_label: Generate Temporary Password
sidebar_class_name: generateTemporaryPassword
keywords: ["transforms", "guides", "password"]
description: Generate a temporary password for all users.
sidebar_position: 2
slug: /docs/transforms/guides/temporary-password
tags: ["Transforms", "Guides", "Password"]
---

## Overview

In this guide, you will learn how to create a nested transform in order to generate a temporary password from a user's attributes.

- The authoritative source's data feed includes both a first_name and a last_name field for every worker.

- A hire date is provided within the authoritative source data feed: the hire_date field is provided for every worker and is in the format of YYYY-MM-DD.

For an initial (temporary) password, set a static value driven off a formula that can be communicated to the new hire by email. This is the formula:

- The first character is the user's first initial in lowercase.
- The user's last name comes next with the first character in uppercase. 
- The user's two-digit start month comes next (from the user's hire date).
- The last part of the password is a static string: "RstP\*!7".

## Create the Example Source from a Deliminated file

This is the CSV file you will upload to create your source for testing this transform:

| id     | email                        | first_name | last_name | hire_date  |
| ------ | ---------------------------- | ---------- | --------- | ---------- |
| 100010 | lewis.hamilton@sailpoint.com | Lewis      | hamilton  | 2020-12-12 |
| 100011 | frank.williams@sailpoint.com | Frank      | Williams  | 2020-07-10 |
| 100012 | paddy.lowe@sailpoint.com     | Paddy      | Lowe      | 2020-09-20 |

To upload your CSV source, go to **Admin** > **Connections** > **Sources** and select **Create New**.

Fill in the form to create a source:

![Create Source](./img/create_source.png)

The source configuration workflow will appear. Keep all the default settings and under **Review and Finish** on the left hand side, select **Exit Configuration**.

## Upload Schema and Accounts

In your newly created source, go to **Import Data** > **Account Schema**. Under **Options**, select **Upload Schema**. Locate the CSV file from earlier in this document.

Once your account schema is uploaded, you will see your available attributes to use within the transform.

![Create Source](./img/account_schema.png)

Now you can upload your accounts. Go to **Import Data** > **Import Accounts** > **Import Data**. Locate the CSV file from earlier in this document.

![Account Summary](./img/account_summary.png)

## Create an Identity Profile for the Source

Create an identity profile for your source. Go to **Admin** > **Identities** > **Identity Profiles** and select **New**.

![Identity Profile](./img/account_summary.png)

Fill out the form and select the source you created earlier.

## Create the Transform

To create the transform for generating the user's temporary password, you will use multiple different operations. You are going to break it out into pieces and then put it all together at the end. The [static transform](../operations/static.md) will be your main transform. You will use nested transforms to create each part of the password and then use those variables created in the final value.

### The First Character is the User's First Initial in Lowercase

The first part of the password is the user's first intitial in lowercase. You can create that attribute by using the [substring operation](../operations/substring.md) to get the first initial and then passing that attribute as input into the [lower operation](../operations/lower.md). In this example, the variable is `firstInitialLowercase`, and you will use it later in your static string.

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

### The User's Last Name Comes Next with the First Character in Uppercase

Adding to the transform, you can create a variable for the first character of the last name. You can do so by using the [substring operation](/idn/docs/transforms/operations/substring) and the [upper operation](/idn/docs/transforms/operations/upper). Once you have the variable `lastInitialUppercase` created, you can add that variable to the end of the static string in the value key.

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

You also need the end of the last name without the first character you already have capitalized from the last step. You can get that by using the substring method and providing only the begin key, which will return everything after the index you specify.

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

### The User's Two-Digit Start Month Comes Next, Taken from the Hire_Date

To get the two-digit start month, use the [split operation](/idn/docs/transforms/operations/split). The `hire_date` is in the format of `YYYY-MM-DD`. To to get the month, split on `-` and set the index to return as 1.

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

### The Last Part of the Password is a Static String: "RstP\*!7"

To add the final part of the password, which is the static string `RstP\*!7`, use the static operation.

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

## Verify the Transform

To verify your transform is working, create the transfrom through the REST API.

To call the APIs for transforms, you need a personal access token and your tenant's name to provide with the request. For more information about how to get a personal access token, see [Personal Access Tokens](/idn/docs/getting-started/authentication#personal-access-tokens). For more information about how to get the name of your tenant, see [Finding Your Organization Tenant Name](/idn/docs/getting-started#finding-your-orgtenant-name).

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

Once you have created the transform successfully, you can apply the new transform and preview what the password will look like for each user.

Log in to your IdentityNow tenant and go to **Admin** > **Identities** > **Identity Profiles**. Select the name of the profile you created earlier, Transform Example. Select the **Mappings** tab, scroll to the bottom and select **Add New Attribute**. Name the attribute `Temporary Password`. To save the new mappings, you must fill out the id, email, first name and last name mappings.

![Attribute Mapping](./img/temporary_password_attribute_mapping.png)

Once you have saved the mappings, select **Preview** in the upper right of the page and select the Lewis Hamilton identity under **Identity to Preview**. The temporaryPassword shows up as `lHamilton12RstP*!7`.

This is an example table of values with the temporary password for each user:

| id     | email                        | first_name | last_name | hire_date  | temporaryPassword  |
| ------ | ---------------------------- | ---------- | --------- | ---------- | ------------------ |
| 100010 | lewis.hamilton@sailpoint.com | Lewis      | hamilton  | 2020-12-12 | lHamilton12RstP*!7 |
| 100011 | frank.williams@sailpoint.com | Frank      | Williams  | 2020-07-10 | fWilliams07RstP*!7 |
| 100012 | paddy.lowe@sailpoint.com     | Paddy      | Lowe      | 2020-09-20 | pLowe09RstP*!7     |

## Next Steps

Looking for more examples or having trouble with one of your complex transforms? Reach out in the [Developer Community Forum](https://developer.sailpoint.com/discuss/).
