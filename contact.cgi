#!C:\Program Files (x86)\Python35-32\python.exe

import cgi


def htmlTop():
	print("""Content-type:text/html\n\n
		<html>
		!DOCTYPE html
			<head lang="en">
				<meta charset="utf-8"/>
				<title>MaccFest</title>
				<link rel="stylesheet"  href="main.css">
                 <meta name="description" content="A new festival to improve your life">
                <link rel="stylesheet" href="main.css">
		    </head>
			 <body>
             <div class="header">

            <img src="maccfest.png" alt="MaccFest Logo">
            <h2>
                C2C
            </h2>

        </div>

        <div class="nav">
            <nav>
                <ul>
                    <li>
                        <a href="index.html">
                            <font color="#ec3f8c">Home</font>
                        </a>
                    </li>
                    <li>
                        <a href="line-up.html">
                            <font color="#39b1c6">Festival Line-Up</font>
                        </a>
                    </li>
                    <li>
                        <a href="info.html">
                            <font color="#1fd26a">Festival Infomation</font>
                        </a>
                    </li>

                </ul>

            </nav>
        </div>""")


def htmlTail():
	print("""</body>
		</html>""")

def getName():
	formData = cgi.FieldStorage()
	name = formData.getvalue('name')
	email = formData.getvalue('mail')
	comment = formData.getvalue('comment')
	return name, email, comment





if __name__ == "__main__":
	try:
		htmlTop()
		a, b, c = getName()
		print("Hello {0}<br>".format(a));
		print("E-Mail {0}<br>".format(b));
		print("Your Post: <br> <br> {0}<br>".format(c));
		htmlTail()
	except:
		cgi.print_exception()
