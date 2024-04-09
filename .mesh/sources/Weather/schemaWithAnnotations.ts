// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "operationTypes": [
        {
          "kind": "OperationTypeDefinition",
          "operation": "query",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Query"
            }
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "enum"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "ENUM_VALUE"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "globalOptions"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sourceName"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "endpoint"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "operationHeaders"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryStringOptions"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryParams"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "OBJECT"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "httpOperation"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "path"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "operationSpecificHeaders"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "httpMethod"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "HTTPMethod"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isBinary"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "requestBaseBody"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryParamArgMap"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "queryStringOptionsByParam"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ObjMap"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns severe weather alerts issued by meteorological agencies - given a lat, and a lon.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "alerts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Station Call ID.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "station"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "WeatherAlert"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/alerts"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"station\":\"station\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a Current Observation - given a lat, and a lon.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "current"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "include"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_current_include"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Station Call ID.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "station"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Comma separated list of Station Call ID's. Example: KRDU,KBFI,KVNY",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "stations"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Comma separated list of points. Example: (35.5, -75.5),(45, 65),(45.12, -130.5)",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "points"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Comma separated list of City ID's. Example: 4487042, 4494942, 4504871",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "cities"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_current_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "lang"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_current_lang"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "CurrentObsGroup"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/current"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"include\":\"include\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"station\":\"station\",\"stations\":\"stations\",\"points\":\"points\",\"cities\":\"cities\",\"units\":\"units\",\"lang\":\"lang\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a daily forecast, where each point represents one day (24hr) period. Every point has a datetime string in the format \"YYYY-MM-DD\". One day begins at 00:00 UTC, and ends at 23:59 UTC. \n",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "forecast_daily"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Station Call ID.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "station"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Number of days to return. Default 16.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "days"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_forecast_daily_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "lang"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_forecast_daily_lang"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ForecastDay"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/forecast/daily"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"station\":\"station\",\"days\":\"days\",\"units\":\"units\",\"lang\":\"lang\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns a 60 minute precipitation forecast, where each point represents one minute (1 min) period.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "forecast_minutely"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Station Call ID.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "station"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_forecast_minutely_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FCMinutely"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/forecast/minutely"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"station\":\"station\",\"units\":\"units\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns 72 hour (hourly) Air Quality forecast, where each point represents a one hour period.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "forecast_airquality"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Number of hours to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "hours"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "AQHourly"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/forecast/airquality"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"key\":\"key\",\"hours\":\"hours\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns historical air quality conditions. See https://www.weatherbit.io/api for API specific rate limits.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "history_airquality"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "AQCurrentGroup"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/history/airquality"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns current air quality conditions.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "current_airquality"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "AQCurrentGroup"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/current/airquality"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns an hourly forecast, where each point represents a one hour period. Every point has a datetime string in the format \"YYYY-MM-DD:HH\". Time is UTC. \n",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "forecast_hourly"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Station Call ID.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "station"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_forecast_hourly_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "lang"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_forecast_hourly_lang"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Number of hours to return.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "hours"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ForecastHourly"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/forecast/hourly"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"station\":\"station\",\"units\":\"units\",\"lang\":\"lang\",\"hours\":\"hours\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns Agweather Forecast  - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "forecast_agweather"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_forecast_agweather_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ForecastAG"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/forecast/agweather"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"start_date\":\"start_date\",\"end_date\":\"end_date\",\"units\":\"units\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns Historical Agweather Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "history_agweather"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "tp"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "queryInput_history_agweather_tp"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_agweather_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "HistoryAG"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/history/agweather"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"start_date\":\"start_date\",\"end_date\":\"end_date\",\"tp\":\"tp\",\"units\":\"units\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns Historical Climate Normals (Averages) - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "normals"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Float"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Float"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Start Day (MM-DD).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start_day"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "End Day (MM-DD).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end_day"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "tp"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "queryInput_normals_tp"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_normals_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Series year for calculation. 2020 for 1991-2020. 2010 for 1981-2010.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "series_year"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Float"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Normals"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/normals"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"start_day\":\"start_day\",\"end_day\":\"end_day\",\"tp\":\"tp\",\"units\":\"units\",\"series_year\":\"series_year\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "history_daily"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Station Call ID.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "station"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_daily_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "lang"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_daily_lang"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "HistoryDay"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/history/daily"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"station\":\"station\",\"start_date\":\"start_date\",\"end_date\":\"end_date\",\"units\":\"units\",\"lang\":\"lang\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "history_hourly"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Station Call ID.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "station"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_hourly_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "lang"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_hourly_lang"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "tz"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_hourly_tz"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "History"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/history/hourly"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"station\":\"station\",\"start_date\":\"start_date\",\"end_date\":\"end_date\",\"units\":\"units\",\"lang\":\"lang\",\"tz\":\"tz\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns Historical Observations - Given a lat, and lon. See https://www.weatherbit.io/api for API specific rate limits.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "history_subhourly"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City ID. Example: 4487042",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city_id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "City search.. Example - &city=Raleigh,NC or &city=Berlin,DE or city=Paris&country=FR",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "city"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Postal Code. Example: 28546",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "postal_code"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Country Code (2 letter) - to be used with postal_code.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "country"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Station Call ID.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "station"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_subhourly_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "lang"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_subhourly_lang"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "tz"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_subhourly_tz"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "HistorySubhourly"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/history/subhourly"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"city_id\":\"city_id\",\"city\":\"city\",\"postal_code\":\"postal_code\",\"country\":\"country\",\"station\":\"station\",\"start_date\":\"start_date\",\"end_date\":\"end_date\",\"units\":\"units\",\"lang\":\"lang\",\"tz\":\"tz\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Retrieve an 8 day forecast relevant to te Energy Sector (degree days, solar radiation, precipitation, wind).",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "forecast_energy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Temperature threshold to use to calculate degree days (default 18 C)",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "threshold"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_forecast_energy_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "tp"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_forecast_energy_tp"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "EnergyObsGroupForecast"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/forecast/energy"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"threshold\":\"threshold\",\"units\":\"units\",\"tp\":\"tp\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Returns aggregate energy specific historical weather fields, over a specified time period. See https://www.weatherbit.io/api for API specific rate limits.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "history_energy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Latitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lat"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Float"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Longitude component of location.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "lon"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Float"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Start Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "End Date (YYYY-MM-DD or YYYY-MM-DD:HH).",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end_date"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "tp"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_energy_tp"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Temperature threshold to use to calculate degree days (default 18 C)",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "threshold"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "units"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "queryInput_history_energy_units"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "EnergyObsGroup"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/history/energy"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"lat\":\"lat\",\"lon\":\"lon\",\"start_date\":\"start_date\",\"end_date\":\"end_date\",\"tp\":\"tp\",\"threshold\":\"threshold\",\"units\":\"units\",\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Downloads bulk data files - OPTIONS: ( current.csv.gz, forecast_hourly.csv.gz, forecast_daily.csv.gz). Units are Metric (Celcius, m/s, etc).",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "bulk_files"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Your registered API key.",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "String"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "JSON"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "httpOperation"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "path"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "/bulk/files"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "httpMethod"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "GET"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "queryParamArgMap"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "{\"key\":\"key\"}"
                  }
                }
              ]
            }
          ]
        }
      ],
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "globalOptions"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "sourceName"
              },
              "value": {
                "kind": "StringValue",
                "value": "Weather"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "endpoint"
              },
              "value": {
                "kind": "StringValue",
                "value": "https://api.weatherbit.io/v2.0"
              }
            }
          ]
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WeatherAlert"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "alerts"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WeatherAlertGroup"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WeatherAlertGroup"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Brief description of weather alert",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Full description of weather alert",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Severity of weather. (Advisory | Watch | Warning)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "severity"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Issued time UTC",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "effective_utc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Issued time local",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "effective_local"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Expiration time UTC",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "expires_utc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Expiration time local",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "expires_local"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "URI to weather alert",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "uri"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "URL"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "alerts"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "URL"
      },
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CurrentObsGroup"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Count of found observations",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "count"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "CurrentObs"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "CurrentObs"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City name (closest)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Source Station ID",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "station"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "List of data sources used in response",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sources"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Visibility - default (M)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "vis"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Relative humidity (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rh"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Dew point temperature - default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dewpt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind direction (degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cardinal wind direction",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_cdir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cardinal wind direction (text)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_cdir_full"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind speed - Default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_speed"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind gust speed - Default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "gust"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Apparent temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "app_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cloud cover (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "clouds"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "weather"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "query_current_data_items_weather"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cycle Hour (UTC) of observation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "datetime"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Full time (UTC) of observation (YYYY-MM-DD HH:MM)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ob_time"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unix Timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Time (UTC) of Sunrise (HH:MM)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sunrise"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Time (UTC) of Sunset (HH:MM)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sunset"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Mean sea level pressure in millibars (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pres"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Air quality index (US EPA standard 0 to +500)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "aqi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "UV Index",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "uv"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Estimated solar radiation (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "solar_rad"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Global horizontal irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ghi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Direct normal irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dni"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Diffuse horizontal irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dhi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Current solar elevation angle (Degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "elev_angle"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Current solar hour angle (Degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hour_angle"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Part of the day (d = day, n = night)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pod"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Precipitation in last hour - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Snowfall in last hour - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "query_current_data_items_weather"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Icon code for forecast image display",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "icon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Weather Condition code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Weather Condition description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Include 1 hour - minutely precip forecast in the response, or severe weather alerts",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_current_include"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "minutely"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "alerts"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_current_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_current_lang"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ar"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "az"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "be"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ca"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "de"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "el"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "es"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "et"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "it"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nb"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ro"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ru"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh_tw"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "enum"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "value"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "\"zh-tw\""
                  }
                }
              ]
            }
          ]
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ForecastDay"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Forecast"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Forecast"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unix Timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp in local time",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_local"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp UTC",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_utc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Date in format \"YYYY-MM-DD:HH\". All datetime is in (UTC)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "datetime"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Accumulated snowfall since last forecast point - default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Snow Depth - default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow_depth"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Accumulated precipitation since last forecast point - default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Temperature (Average) - default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Dewpoint (Average) - default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dewpt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Maximum daily Temperature - default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Minimum daily Temperature - default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "min_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Apparent Maximum daily Temperature - default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "app_max_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Apparent Minimum daily Temperature - default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "app_min_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Relative Humidity as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rh"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cloud cover as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "clouds"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "weather"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "query_forecast_daily_data_items_weather"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Mean Sea level pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pres"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "UV Index",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "uv"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "[Deprecated] Max direct component of solar insolation (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_dhi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Visibility default (KM)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "vis"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Chance of Precipitation as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pop"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Moon phase",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "moon_phase"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sunrise unix timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sunrise_ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sunset unix timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sunset_ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Moonrise unix timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "moonrise_ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Moonset unix timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "moonset_ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Part of the day (d = day, n = night)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pod"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind Speed (default m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind direction",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cardinal wind direction",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_cdir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cardinal wind direction (text)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_cdir_full"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "query_forecast_daily_data_items_weather"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Icon code for forecast image display",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "icon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Weather Condition code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Weather Condition description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_forecast_daily_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_forecast_daily_lang"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ar"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "az"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "be"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ca"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "de"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "el"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "es"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "et"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "it"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nb"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ro"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ru"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh_tw"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "enum"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "value"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "\"zh-tw\""
                  }
                }
              ]
            }
          ]
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "FCMinutely"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "FCMinutelyOb"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "FCMinutelyOb"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Full time (UTC) of forecast point (YYYY-MM-DD HH:MM)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_utc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Full local time of forecast point (YYYY-MM-DD HH:MM)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_local"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unix Timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Precipitation rate - Default (mm/hr)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Snowfall rate - Default (mm/hr)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_forecast_minutely_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "AQHourly"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AQHour"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "AQHour"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unix Timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp in local time",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_local"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp UTC",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_utc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cloud cover as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "aqi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of SO2 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "so2"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of NO2 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "no2"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of O3 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "o3"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of PM 2.5 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pm25"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of PM 10 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pm10"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "AQCurrentGroup"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "AQCurrent"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "AQCurrent"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cloud cover as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "aqi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of SO2 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "so2"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of NO2 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "no2"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of O3 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "o3"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of PM 2.5 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pm25"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Concentration of PM 10 (µg/m³)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pm10"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ForecastHourly"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country Abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ForecastHour"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ForecastHour"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unix Timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp in local time",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_local"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp UTC",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_utc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Date in format \"YYYY-MM-DD:HH\". All datetime is in (UTC)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "datetime"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Accumulated snowfall since last forecast point - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Snow depth - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow_depth"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Accumulated precipitation since last forecast point. Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Dewpoint - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dewpt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Apparent Temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "app_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Relative Humidity as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rh"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cloud cover as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "clouds"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "weather"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "query_forecast_hourly_data_items_weather"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Mean Sea level pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pres"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "UV Index",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "uv"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Estimated solar radiation (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "solar_rad"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Global horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ghi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Diffuse normal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dhi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Direct normal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dni"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Visibility - Default (KM)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "vis"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Part of day (d = day, n = night)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pod"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Chance of Precipitation as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pop"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind Speed - Default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind Gust Speed - Default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_gust_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind direction",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cardinal wind direction",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_cdir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cardinal wind direction (text)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_cdir_full"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "query_forecast_hourly_data_items_weather"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Icon code for forecast image display",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "icon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Weather Condition code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Weather Condition description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_forecast_hourly_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_forecast_hourly_lang"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ar"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "az"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "be"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ca"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "de"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "el"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "es"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "et"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "it"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nb"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ro"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ru"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh_tw"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "enum"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "value"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "\"zh-tw\""
                  }
                }
              ]
            }
          ]
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ForecastAG"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "HistoryAGObj"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HistoryAGObj"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Bulk Soil Density",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "bulk_soil_density"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Downward Longwave Radiation Flux",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dlwrf_avg"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Maximum Downward Longwave Radiation Flux",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dlwrf_max"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Net Downward Longwave Radiation Flux",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dlwrf_net"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Downward Shortwave Radiation Flux",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dswrf_avg"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Maximum Downward Shortwave Radiation Flux",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dswrf_max"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Net Downward Shortwave Radiation Flux",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dswrf_net"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Evapotranspiration",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "evapotranspiration"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Precipitation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Pressure",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pres_avg"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Data revision status",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "revision_status"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Skin Temperature",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "skin_temp_avg"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Maximum Skin Temperature",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "skin_temp_max"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Minimum Skin Temperature",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "skin_temp_min"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Soil Moisture (0-10cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "soilm_0_10cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Soil Moisture (100-200cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "soilm_100_200cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Soil Moisture (10-40cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "soilm_10_40cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Soil Moisture (40-100cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "soilm_40_100cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Soil Temperature (0-10cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "soilt_0_10cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Soil Temperature (100-200cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "soilt_100_200cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Soil Temperature (10-40cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "soilt_10_40cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Soil Temperature (40-100cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "soilt_40_100cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Specific Humidity",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "specific_humidity"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp in local time",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_local"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp UTC",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_utc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Temperature at 2 meters",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp_2m_avg"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Volumetric Soil Moisture (0-10cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "v_soilm_0_10cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Volumetric Soil Moisture (100-200cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "v_soilm_100_200cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Volumetric Soil Moisture (10-40cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "v_soilm_10_40cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Volumetric Soil Moisture (40-100cm depth)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "v_soilm_40_100cm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Valid Date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "valid_date"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Date"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Wind Speed at 10 meters",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_10m_spd_avg"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Represents date values",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Date"
      },
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_forecast_agweather_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HistoryAG"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "HistoryAGObj"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Time period of calculation (daily [DEFAULT], or hourly).",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_agweather_tp"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "daily"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hourly"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_agweather_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Normals"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "List of data sources used in response",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sources"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "NormalsObj"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "NormalsObj"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Day number",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "day"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Month number",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "month"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Hour number",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hour"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average temperature",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average dew point",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dewpt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Maximum wind speed",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Minimum wind speed",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "min_wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average wind speed",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average wind direction",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Liquid equivalent precipitation - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Snowfall - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Time period of calculation (daily, monthly, or hourly).",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_normals_tp"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "daily"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hourly"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "monthly"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_normals_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HistoryDay"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City name (Closest)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "List of data sources used in response",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sources"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "HistoryDayObj"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HistoryDayObj"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Date in format \"YYYY-MM-DD\". All datetime is in (UTC)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "datetime"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Date"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unix timestamp of datetime (Midnight UTC)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Data revision status (interim or final)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "revision_status"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average sea level pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pres"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average relative humidity as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rh"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average dewpoint - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dewpt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Max temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Time of max memperature - Unix Timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_temp_ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Min temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "min_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Time of max temperature - unix timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "min_temp_ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average wind speed - default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average wind direction (degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind gust speed - default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_gust_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Max 2min Wind Speed - default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Direction of wind at time of max 2min wind (degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Time of max 2min wind - unix timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_wind_spd_ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average hourly global horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ghi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total global horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_ghi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average direct normal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dni"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total direct normal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_dni"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average hourly diffuse horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dhi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total diffuse horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_dhi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Max UV Index (1-11+)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "max_uv"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Liquid equivalent precipitation - default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Satellite estimated liquid equivalent precipitation - default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip_gpm"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Snowfall - default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Snow Depth - default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow_depth"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_daily_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_daily_lang"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ar"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "az"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "be"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ca"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "de"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "el"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "es"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "et"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "it"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nb"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ro"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ru"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh_tw"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "enum"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "value"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "\"zh-tw\""
                  }
                }
              ]
            }
          ]
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "History"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City name (Closest)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "List of data sources used in response",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sources"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "HistoryObj"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HistoryObj"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Unix Timestamp",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp in local time",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_local"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Timestamp UTC",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timestamp_utc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Data revision status (interim or final)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "revision_status"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Date in format \"YYYY-MM-DD:HH\". All datetime is in (UTC)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "datetime"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Sea level pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "slp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Pressure (mb)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pres"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Relative Humidity as a percentage (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rh"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Dew point (Default Celcius)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dewpt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Temperature (Default Celcius)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Apparent Temperature or Wind Chill/Heat Index (Default Celcius)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "app_temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind Speed (Default m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind Gust Speed - Default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_gust_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Wind direction (Degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "UV Index (1-11+)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "uv"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Estimated solar radiation (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "solar_rad"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Global horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ghi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Diffuse normal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dhi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Direct normal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dni"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Solar hour angle (Degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "h_angle"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Solar elevation angle (Degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "elev_angle"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Azimuth angle (Degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "azimuth"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Visibility (KM)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "vis"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Part of the day (d = day, n = night)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "pod"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "weather"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "query_history_hourly_data_items_weather"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cloud Cover 0-100 (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "clouds"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Liquid equivalent precipitation - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Snowfall - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "query_history_hourly_data_items_weather"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Icon code for forecast image display",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "icon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Weather Condition code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Weather Condition description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_hourly_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_hourly_lang"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ar"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "az"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "be"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ca"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "de"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "el"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "es"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "et"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "it"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nb"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ro"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ru"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh_tw"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "enum"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "value"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "\"zh-tw\""
                  }
                }
              ]
            }
          ]
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Assume utc (default) or local time for start_date, end_date",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_hourly_tz"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "local"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "utc"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HistorySubhourly"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City name (Closest)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "List of data sources used in response",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sources"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "HistoryObj"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_subhourly_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Language (Default: English) See <a target='blank' href='/api/requests'>language field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_subhourly_lang"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ar"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "az"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "be"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bg"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "bs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ca"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "cs"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "de"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fi"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "el"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "es"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "et"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hu"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "it"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "kw"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nb"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "nl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "pt"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ro"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ru"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sl"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "sv"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "tr"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "uk"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "zh_tw"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "enum"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "value"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "\"zh-tw\""
                  }
                }
              ]
            }
          ]
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Assume utc (default) or local time for start_date, end_date",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_subhourly_tz"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "local"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "utc"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "EnergyObsGroupForecast"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City name (closest)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Degree day threshold units",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "threshold_units"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Degree day threshold",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "threshold_value"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "EnergyObsSeries"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "EnergyObsSeries"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "date"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Date"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cooling degree days",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cdd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Heating degree days",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hdd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Relative humidity (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rh"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average dew point temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dewpt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average wind direction (Degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average wind speed - Default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average cloud cover (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "clouds"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total global horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_ghi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total diffuse horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_dhi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total direct normal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_dni"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average number of daily sun hours - # hours where Solar GHI > 1000 W/m^2",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sun_hours"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total precipitation in period - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total snowfall in period - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_forecast_energy_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Time period (default: daily)",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_forecast_energy_tp"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hourly"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "daily"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "EnergyObsGroup"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Count of found observations",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "count"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Start Date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "start_date"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "End Date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "end_date"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "data"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "EnergyObs"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "EnergyObs"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "City name (closest)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "city_name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "State abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Country abbreviation",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "country_code"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Local IANA time zone",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "timezone"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Latitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lat"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Longitude",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "lon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Nearest Station ID [DEPRECATED]",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "station_id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "List of data sources used in response",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sources"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Cooling degree days",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "cdd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Heating degree days",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "hdd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average Relative humidity (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rh"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average dew point temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "dewpt"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average wind direction (Degrees)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_dir"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average wind speed - Default (m/s)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "wind_spd"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average temperature - Default (C)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "temp"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average cloud cover (%)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "clouds"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total global horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_ghi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total diffuse horizontal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_dhi"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total direct normal solar irradiance (W/m^2)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "t_dni"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Average number of daily sun hours - # hours where Solar GHI > 1000 W/m^2",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "sun_hours"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total precipitation in period - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "precip"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Total snowfall in period - Default (mm)",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "snow"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Time period to aggregate by (daily, monthly)",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_energy_tp"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "hourly"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "daily"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "monthly"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Convert to units. Default Metric See <a target='blank' href='/api/requests'>units field description</a>",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "queryInput_history_energy_units"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "S"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "I"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "JSON"
      },
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "specifiedBy"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "value": {
                "kind": "StringValue",
                "value": "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"
              }
            }
          ]
        }
      ]
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ObjMap"
      },
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "HTTPMethod"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "GET"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "HEAD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "POST"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PUT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "DELETE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "CONNECT"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "OPTIONS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "TRACE"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PATCH"
          },
          "directives": []
        }
      ],
      "directives": []
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});