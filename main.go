package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.Static("public"))

	e.GET("/ping", func(c echo.Context) error {
		return c.JSON(http.StatusOK, echo.Map{
			"isSuccess": true,
			"data": echo.Map{
				"message": "Pong!",
			},
		})
	})

	e.GET("*", func(c echo.Context) error {
		return c.File("public/index.html")
	})

	e.Start(":8080")
}
