import React from "react"

class Accordion extends React.Component {
  render() {
    const { title, content, expand, onClick } = this.props

    return (
      <dl className="accordion__item">
        <dt
          className={expand ? "title is-expanded" : "title"}
          onClick={onClick}
        >
          {title}
        </dt>
        <dd
          className={expand ? "content is-expanded" : "content"}
          onClick={onClick}
        >
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </dd>
      </dl>
    )
  }
}

class ListAccordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      block1: true,
      block2: false,
      block3: false,
    }
  }

  toggle = index => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] })
  }

  toggleExpand = (expand = false) => () => {
    this.setState({
      block1: expand,
      block2: expand,
      block3: expand,
    })
  }

  render() {
    const data = this.props.data
    return (
      <div className="container">
        <h2 className="hdg-lv2">
          Frequently <span>Asked</span> Questions
        </h2>
        <div className="accordion">
          {data.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              onClick={this.toggle(index + 1)}
              expand={this.state[`block${index + 1}`]}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ListAccordion
