from datetime import timedelta
from pathlib import Path

import dj_database_url
from decouple import config

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config(
    "DJANGO_SECRE_KEY",
    cast=str,
    default="django-insecure-p58p^bc7k@ik^s5gaw84t8c7(8=pz1(-jq6b0b%(444tgfc5p&",
)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config("DJANGO_DEBUG", cast=bool, default=True)

ALLOWED_HOSTS = config(
    "DJANGO_ALLOWED_HOSTS",
    cast=lambda v: v if isinstance(v, list) else [s.strip() for s in v.split(",")],
    default=["127.0.0.1", "localhost"],
)

# Email configs

EMAIL_BACKEND = "django_ses.SESBackend"
DEFAULT_FROM_EMAIL = config("DEFAULT_FROM_EMAIL", cast=str)
AWS_SES_ACCESS_KEY_ID = config("AWS_SES_ACCESS_KEY_ID", cast=str)
AWS_SES_SECRET_ACCESS_KEY = config("AWS_SES_SECRET_ACCESS_KEY", cast=str)
USE_SES_V2 = True
AWS_SES_REGION_NAME = config("AWS_SES_REGION_NAME", cast=str)
AWS_SES_REGION_ENDPOINT = f"email.{AWS_SES_REGION_NAME}.amazonaws.com"
AWS_SES_FROM_EMAIL = DEFAULT_FROM_EMAIL

DOMAIN = config("DOMAIN", cast=str, default="localhost:3000")
SITE_NAME = "Full Auth"

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # external apps
    "rest_framework",
    "drf_spectacular",
    "djoser",
    "social_django",
    "corsheaders",
    # project apps
    "users",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    "default": dj_database_url.config(
        default=config("DATABASE_URL", cast=str, default=""),
        conn_max_age=config("CONN_MAX_AGE", cast=int, default=30),
        conn_health_checks=True,
    )
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "static"
MEDIA_URL = "media/"
MEDIA_ROOT = BASE_DIR / "media"


AUTHENTICATION_BACKENDS = [
    "social_core.backends.google.GoogleOAuth2",
    "social_core.backends.facebook.FacebookOAuth2",
    "social_core.backends.github.GithubOAuth2",
    "django.contrib.auth.backends.ModelBackend",
]


# DRF configs
REST_FRAMEWORK = {
    "DEFAULT_SCHEMA_CLASS": "drf_spectacular.openapi.AutoSchema",
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "users.authentication.CustomJWTAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(hours=1),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
}

SPECTACULAR_SETTINGS = {
    "TITLE": "Boilerplate Auth API",
    "DESCRIPTION": "boilerplate authentication system",
    "VERSION": "1.0.0",
    "SERVE_INCLUDE_SCHEMA": False,
    "SCHEMA_PATH_PREFIX": "/api/",
    # OTHER SETTINGS
}

# cookie configs
AUTH_COOKIE = "access"
AUTH_COOKIE_ACCESS_MAX_AGE = timedelta(days=1)
AUTH_COOKIE_REFRESH_MAX_AGE = timedelta(days=7)
AUTH_COOKIE_SECURE = config("AUTH_COOKIE_SECURE", cast=bool, default=False)
AUTH_COOKIE_HTTP_ONLY = True
AUTH_COOKIE_PATH = "/"
AUTH_COOKIE_SAMESITE = "None"

# social loggin configs
# google
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = config("GOOGLE_AUTH_KEY", cast=str)
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = config("GOOGLE_AUTH_SECRET", cast=str)
SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "openid",
]
SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA = ["first_name", "last_name"]

# facebook
SOCIAL_AUTH_FACEBOOK_KEY = config("FACEBOOK_AUTH_KEY", cast=str)
SOCIAL_AUTH_FACEBOOK_SECRET = config("FACEBOOK_AUTH_SECRET", cast=str)
SOCIAL_AUTH_FACEBOOK_SCOPE = ["email"]
SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    "fields": "email, first_name, last_name",
}

# github
SOCIAL_AUTH_GITHUB_KEY = config("GITHUB_AUTH_KEY", cast=str)
SOCIAL_AUTH_GITHUB_SECRET = config("GITHUB_AUTH_SECRET", cast=str)
SOCIAL_AUTH_GITHUB_SCOPE = ["user:email"]

DJOSER = {
    "PASSWORD_RESET_CONFIRM_URL": "password-reset/{uid}/{token}",
    "ACTIVATION_URL": "activation/{uid}/{token}",
    "SEND_ACTIVATION_EMAIL": True,
    "SEND_CONFIRMATION_EMAIL": True,
    "USER_CREATE_PASSWORD_RETYPE": True,
    "PASSWORD_RESET_CONFIRM_RETYPE": True,
    "TOKEN_MODEL": None,
    "SOCIAL_AUTH_ALLOWED_REDIRECT_URIS": config(
        "REDIRECT_URLS",
        cast=lambda v: v if isinstance(v, list) else [s.strip() for s in v.split(",")],
        default=[
            "http://localhost:3000/auth/google",
            "http://localhost:3000/auth/facebook",
            "http://localhost:3000/auth/github",
        ],
    ),
}

# Cros configs
CORS_ALLOWED_ORIGINS = config(
    "CORS_ALLOWED_ORIGINS",
    cast=lambda v: v if isinstance(v, list) else [s.strip() for s in v.split(",")],
    default=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
)

CORS_ALLOW_CREDENTIALS = True

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTH_USER_MODEL = "users.User"
