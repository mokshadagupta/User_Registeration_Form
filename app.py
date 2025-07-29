from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # You can process form data here if needed
        return render_template('success.html')
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)
    